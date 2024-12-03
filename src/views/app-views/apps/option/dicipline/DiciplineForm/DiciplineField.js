import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	diciplineNameR: [
		{
			required: true,
			message: 'Please enter Dicipline Knowledge Name',
		}
	],
	diciplineKetR: [
		{
			required: true,
			message: 'Please enter Dicipline Knowledge Description',
		}
	],
}


const DiciplineKnowledgeField = () => {

	const initialValues = {
		diciplineName: '',
		diciplineKet: ''
	}

	const [values, setValues] = React.useState(initialValues);

	function handleProjectChange(e) {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	}

	return (
		<Card title="Dicipline Knowledge">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="diciplineName" label="Dicipline Knowledge Name" rules={rules.knowledgeNameR}>
					    <Input 
						placeholder="Enter Dicipline Knowledge Name"
						type='text'
						value={values.projectTypeName}
						name='diciplineName'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="diciplineKet" label="dicipline Desc" rules={rules.diciplineKetR}>
					    <Input
						placeholder="Enter Project Desc"
						type='text'
						value={values.projectTypeKet}
						name='projectTypeKet'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
				
			</Row>
		</Card>
	)
}

export default DiciplineKnowledgeField
