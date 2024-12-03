import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import FirestoreService from 'services/FirestoreService';
import { useNavigate } from 'react-router-dom';
import CommDeffField from './CommDeffField';

const ADD = 'ADD'
const EDIT = 'EDIT' 

const CommDeffForm = props => {

	const { mode = ADD, param } = props
	const [form] = Form.useForm();
	// const [uploadLoading, setUploadLoading] = useState(false)
	const [submitLoading, setSubmitLoading] = useState(false)
	const navigate = useNavigate();

	const initialValues = {
		commSysDeffNo: '',
        commSysDeffName: '',
        commSysDeffSub:[
            {
				commSysDeffSubNo: '',
				commSysDeffSubName: ''
			}
        ]
	}

	useEffect(() => {
        const fetchData = async () => {
          if (mode === EDIT) {
            const { id } = param;
            try {
              const document = await FirestoreService.getDocument('commSysDeff', id);
              form.setFieldsValue(document);
            } catch (error) {
              message.error('Error fetching document: ' + error.message);
            }
          }
        };
    
        fetchData();
      }, [form, mode, param]);

	  const onReset = () => {
		form.resetFields();
	  };

	  const onFinish = () => {
        setSubmitLoading(true);
        form.validateFields().then(values => {
          setTimeout(() => {
            setSubmitLoading(false);
            if (mode === ADD) {
              message.success(`Created ${values.commSysDeffName} to commSysDeff`);
              navigate('/app/apps/general-input/comm-deff/comm-deff-list');
            }
            if (mode === EDIT) {
              message.success(`Product saved`);
              navigate('/app/apps/general-input/comm-deff/comm-deff-list');
            }
          }, );
        }).catch(info => {
          setSubmitLoading(false);
        });
      };


	  const handleFinish = async (values) => {
        try {
          if (mode === ADD) {
            const docId = await FirestoreService.createDocument('commSysDeff', values);
            message.success(`Comm System created with ID: ${docId}`);
          } else if (mode === EDIT) {
            const { id } = param;
            await FirestoreService.updateDocument('commSysDeff', id, values);
            message.success(`Comm System updated successfully`);
          }
          form.resetFields();
          onFinish();
        } catch (error) {
          message.error('Error creating/updating Comm System Deff: ' + error.message);
        }
      };

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={initialValues}
				onFinish={handleFinish}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add Commissioning System Deff' : `Edit Commissioning System Deff`} </h2>
							<div className="mb-3">
								<Button className="mr-2" onClick={onReset}>Discard</Button>
								<Button type="primary" onClick={() => onFinish()} htmlType="submit" loading={submitLoading} >
									{mode === 'ADD'? 'Add' : `Save`}
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs 
						defaultActiveKey="1" 
						style={{marginTop: 30}}
						items={[
							
							{
								label: 'Project Type Field',
								key: '1',
								children: <CommDeffField />,
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default CommDeffForm
