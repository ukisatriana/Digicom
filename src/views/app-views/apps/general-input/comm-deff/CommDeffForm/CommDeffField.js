import React from 'react'
import { Input, Row, Col, Card, Form, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const rules = {
	commDeffNoR: [
		{
			required: true,
			message: 'Please enter Commissioning Definition No',
		}
	],
	commDeffNameR: [
		{
			required: true,
			message: 'Please enter Commissioning Definition Name',
		}
	],
    commDeffSubNo: [
		{
			required: true,
			message: 'Please enter Commissioning Definition Sub No',
		}
	],
    commDeffSubName: [
		{
			required: true,
			message: 'Please enter Commissioning Definition Sub Name',
		}
	],
}

const CommDeffField = () => {

	const initialValues = {
    commSysDeffNo: "",
    commSysDeffName: "",
    commSysDeffSub: [
      {
        commSysDeffSubNo: "",
        commSysDeffSubName: ""
      },
    ],
  };

	const [values, setValues] = React.useState(initialValues);

	function handleProjectChange(e) {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	}

	return (
    

    <Row gutter={16}>
      {/* Section 1 */}

      <Col xs={24} sm={24} md={24}>
        <Card title="System">
          <Form.Item
            name="commSysDeffNo"
            label="Commissioning System Definition Number"
            rules={rules.commDeffNoR}
          >
            <Input
              placeholder="Enter Commissioning System Definition Number"
              type="text"
              value={values.commSysDeffNo}
              name="commSysDeffNo"
              onChange={(e) => handleProjectChange(e)}
            />
          </Form.Item>
          <Form.Item
            name="commSysDeffName"
            label="Commissioning System Definition Name"
            rules={rules.commDeffNameR}
          >
            <Input
              placeholder="Enter Commissioning System Definition Name"
              type="text"
              value={values.commSysDeffName}
              name="commSysDeffName"
              onChange={(e) => handleProjectChange(e)}
            />
          </Form.Item>
        </Card>
      </Col>

      {/* ---------------- */}

      <Col xs={24} sm={24} md={24}>
        <Card title="Subsystem">
          <Form.List name="commSysDeffSub">
            {(fields, { add, remove }) => {
              return (
                <div className="mt-3">
                  {fields.map((field, index) => (
                    <Row key={field.key} gutter={16}>
                      <Col sm={24} md={11}>
                        <Form.Item
                          {...field}
                          label="Subsystem Number"
                          name={[field.name, "commSysDeffSubNo"]}
                          onChange={(e) => handleProjectChange(e)}
                          className="w-100"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col sm={24} md={11}>
                        <Form.Item
                          {...field}
                          label="Subsystem Name"
                          name={[field.name, "commSysDeffSubName"]}
                          onChange={(e) => handleProjectChange(e)}
                          className="w-100"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col sm={24} md={2}>
                        <MinusCircleOutlined
                          className="mt-md-4 pt-md-3"
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </Col>
                      <Col span={24}>
                        <hr className="mt-2" />
                      </Col>
                    </Row>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      className="w-100"
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Card>
      </Col>
    </Row>
  );
}

export default CommDeffField
