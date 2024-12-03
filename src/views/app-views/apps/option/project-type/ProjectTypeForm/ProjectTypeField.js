import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	projectTypeNameR: [
		{
			required: true,
			message: 'Please enter project name',
		}
	],
	projectTypeKetR: [
		{
			required: true,
			message: 'Please enter project location',
		}
	],
}


const ProjectTypeField = () => {

	const initialValues = {
		projectTypeName: '',
		projectTypeKet: ''
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
		<Card title="Project Type">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="projectTypeName" label="Project Type" rules={rules.projectTypeNameR}>
					    <Input 
						placeholder="Enter Project Name"
						type='text'
						value={values.projectTypeName}
						name='projectTypeName'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="projectTypeKet" label="Project Type Desc" rules={rules.projectTypeKetR}>
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

export default ProjectTypeField
