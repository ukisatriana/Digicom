import React, { useState, useEffect} from 'react'
import { Input, Row, Col, Card, Form, Button, Select } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import FirestoreService from 'services/FirestoreService';

const { Option } = Select;

const rules = {
	commDeffNoR: [
		{
			required: true,
			message: 'Please enter Definition No',
		}
	],
	commDeffNameR: [
		{
			required: true,
			message: 'Please enter Definition Name',
		}
	],
    commDeffSubNo: [
		{
			required: true,
			message: 'Please enter Definition Sub No',
		}
	],
    commDeffSubName: [
		{
			required: true,
			message: 'Please enter Definition Sub Name',
		}
	],
}

const IdentActivityField = () => {

	// const initialValues = {
	// 	commSysDeffName: '',
  //       commSysDeffNo: '',
  //       commSysDeffSubNo: '',
  //       commSysDeffSubName: '',
  //       identActivitySub:[
  //           {
	// 			tagNo: '',
  //               itemDesc: '',
  //               commActivities: '',
  //               specProcedurReq: ''
	// 		}
  //       ],
	// }

  const [loading, setLoading] = useState(false); // Untuk menandakan data sedang dimuat
  const [values, setValues] = useState('');
  const [commSysDeff, setCommSysDeffNo] = useState([]); // Untuk menyimpan data projectType
  const [commSysDeffSub, setCommSysDeffSubNo] = useState([]); // Untuk menyimpan data projectType

  useEffect(() => {
    const fetchProjectTypes = async () => {
      setLoading(true);
      try {
        const types = await FirestoreService.getDocuments("commSysDeff");
        if (Array.isArray(types)) {
          setCommSysDeffNo(types);
        } else {
          console.error("Invalid data format:", types);
        }
      } catch (error) {
        console.error("Error fetching project types:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProjectTypes();
  }, []);

    const handleProjectChange = (value, fieldName) => {
      setValues({
        ...values,
        [fieldName]: value,
      });
    
      // Jika fieldName adalah "commSysDeffNo", perbarui commSysDeffSub
      if (fieldName === "commSysDeffNo") {
        const selectedSystem = commSysDeff.find(
          (system) => system.commSysDeffNo === value
        );
        setCommSysDeffSubNo(selectedSystem?.commSysDeffSub || []);
      }
    };

	return (
    

    <Row gutter={16}>
      {/* Section 1 */}

      <Col xs={24} sm={24} md={24}>
        <Card title="General Input Identification">
        <Form.Item
            name="commSysDeffNo"
            label="Comm System Deff No"
            rules={rules.commDeffNoR}
          >
            <Select
              className="w-100"
              placeholder="Select Comm System Deff No"
              value={values.commSysDeffNo || undefined} // Gunakan undefined agar placeholder muncul
              onChange={(value) => handleProjectChange(value, "commSysDeffNo")}
            >
              {commSysDeff.map((type) => (
                <Option key={type.id} value={type.commSysDeffNo}>
                  {type.commSysDeffNo}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="commSysDeffName"
            label="System Definition Name"
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
          <Form.Item
            name="commSysDeffSubNo"
            label="SubSystem Definition Number"
            rules={rules.commDeffSubNo}
          >
            <Select
              className="w-100"
              placeholder="Select Comm System Deff Sub No"
              value={values.commSysDeffSubNo || undefined} // Gunakan undefined agar placeholder muncul
              onChange={(value) =>
                handleProjectChange(value, "commSysDeffSubNo")
              }
            >
              {commSysDeffSub.map((sub) => (
                <Option key={sub.id} value={sub.commSysDeffSubNo}>
                  {sub.commSysDeffSubNo}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="commSysDeffSubName"
            label="SubSystem Definition Name"
            rules={rules.commDeffNameR}
          >
            <Input
              placeholder="Enter Commissioning SubSystem Definition Name"
              type="text"
              value={values.commSysDeffSubName}
              name="commSysDeffSubName"
              onChange={(e) => handleProjectChange(e)}
            />
          </Form.Item>
        </Card>
      </Col>

      {/* ---------------- */}

      <Col xs={24} sm={24} md={24}>
        <Card title="Identification Activities Field">
          <Form.List name="identActivitySub">
            {(fields, { add, remove }) => {
              return (
                <div className="mt-3">
                  {fields.map((field, index) => (
                    <Row key={field.key} gutter={16}>
                      <Col sm={24} md={6}>
                        <Form.Item
                          {...field}
                          label="Tag No"
                          name={[field.name, "tagNo"]}
                          onChange={(e) => handleProjectChange(e)}
                          className="w-100"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col sm={24} md={5}>
                        <Form.Item
                          {...field}
                          label="Item Description"
                          name={[field.name, "itemDesc"]}
                          onChange={(e) => handleProjectChange(e)}
                          className="w-100"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col sm={24} md={5}>
                        <Form.Item
                          {...field}
                          label="Commissioning Activities"
                          name={[field.name, "commActivities"]}
                          onChange={(e) => handleProjectChange(e)}
                          className="w-100"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col sm={24} md={6}>
                        <Form.Item
                          {...field}
                          label="Specific Procedure Required"
                          name={[field.name, "specProcedurReq"]}
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

export default IdentActivityField
