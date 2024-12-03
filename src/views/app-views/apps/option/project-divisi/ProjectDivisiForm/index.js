import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import FirestoreService from 'services/FirestoreService';
import { useNavigate } from 'react-router-dom';
import ProjectDivisiField from './ProjectDivisiField';

const ADD = 'ADD'
const EDIT = 'EDIT' 

const ProjectDivisiForm = props => {

	const { mode = ADD, param } = props
	const [form] = Form.useForm();
	// const [uploadLoading, setUploadLoading] = useState(false)
	const [submitLoading, setSubmitLoading] = useState(false)
	const navigate = useNavigate();

	const initialValues = {
		projectDivisiName: '',
		projectDivisiKet: ''
	}

	useEffect(() => {
        const fetchData = async () => {
          if (mode === EDIT) {
            const { id } = param;
            try {
              const document = await FirestoreService.getDocument('projectDivisi', id);
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
              message.success(`Created ${values.projectDivisiName} to projectDivisi`);
              navigate('/app/apps/option/project-divisi/project-divisi-list');
            }
            if (mode === EDIT) {
              message.success(`Product saved`);
              navigate('/app/apps/option/project-divisi/project-divisi-list');
            }
          }, 1500);
        }).catch(info => {
          setSubmitLoading(false);
        });
      };


	  const handleFinish = async (values) => {
        try {
          if (mode === ADD) {
            const docId = await FirestoreService.createDocument('projectDivisi', values);
            message.success(`Project Divisi created with ID: ${docId}`);
          } else if (mode === EDIT) {
            const { id } = param;
            await FirestoreService.updateDocument('projectDivisi', id, values);
            message.success(`Project Divisi updated successfully`);
          }
          form.resetFields();
          onFinish();
        } catch (error) {
          message.error('Error creating/updating Project Divisi: ' + error.message);
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
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Project Divisi' : `Edit Project Divisi`} </h2>
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
								label: 'Project Divisi Field',
								key: '1',
								children: <ProjectDivisiField />,
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default ProjectDivisiForm
