import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	projectDivisiNameR: [
		{
			required: true,
			message: 'Please enter Project Divisi',
		}
	],
	projectDivisiKetR: [
		{
			required: true,
			message: 'Please enter Project Divisi Keterangan',
		}
	],
}


const ProjectDivisiField = () => {

	const initialValues = {
		projectDivisiName: '',
		projectDivisiKet: ''
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
          <Form.Item
            name="projectDivisiName"
            label="Project Divisi Name"
            rules={rules.projectDivisiNameR}
          >
            <Input
              placeholder="Enter Project Name"
              type="text"
              value={values.projectDivisiName}
              name="projectDivisiName"
              onChange={(e) => handleProjectChange(e)}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="projectDivisiKet"
            label="Project Divisi Desc"
            rules={rules.projectDivisiKetR}
          >
            <Input
              placeholder="Enter Project Divisi Desc"
              type="text"
              value={values.projectDivisiKet}
              name="projectDivisiKet"
              onChange={(e) => handleProjectChange(e)}
            />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}

export default ProjectDivisiField
