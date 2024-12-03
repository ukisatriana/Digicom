import React, { useEffect, useState } from "react";
import { Input, Row, Col, Card, Form, Select, Spin } from "antd";
import FirestoreService from "services/FirestoreService";

const { Option } = Select;

const rules = {
  projectName: [{ required: true, message: "Please enter project name" }],
  projectLocation: [{ required: true, message: "Please enter project location" }],
  projectTypeName: [{ required: true, message: "Please select project type" }],
  projectManagerName: [{ required: true, message: "Please enter manager name" }],
};

const ProjectField = () => {
  const initialValues = {
    projectName: "",
    projectLocation: "",
    projectTypeName: "",
    projectDivisiName: "",
    projectManagerName: "",
  };

  const [values, setValues] = useState(initialValues);
  const [projectTypes, setProjectTypes] = useState([]);
  const [projectDivisi, setProjectDivisi] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [types, divisi] = await Promise.all([
          FirestoreService.getDocuments("projectType"),
          FirestoreService.getDocuments("projectDivisi"),
        ]);

        if (Array.isArray(types)) {
          setProjectTypes(types);
        } else {
          console.error("Invalid project types format: ", types);
        }

        if (Array.isArray(divisi)) {
          setProjectDivisi(divisi);
        } else {
          console.error("Invalid project divisi format: ", divisi);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProjectChange = (value, fieldName) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  if (loading) {
    return (
      <Card title="Project">
        <Spin tip="Loading..." />
      </Card>
    );
  }

  return (
    <Card title="Project">
      <Row gutter={16}>
        {[
          { name: "projectName", label: "Project Name", type: "input" },
          { name: "projectLocation", label: "Project Location", type: "input" },
          { name: "projectManagerName", label: "Manager Project Name", type: "input" },
        ].map((field) => (
          <Col span={24} key={field.name}>
            <Form.Item name={field.name} label={field.label} rules={rules[field.name]}>
              <Input
                placeholder={`Enter ${field.label}`}
                value={values[field.name]}
                onChange={(e) => handleProjectChange(e.target.value, field.name)}
              />
            </Form.Item>
          </Col>
        ))}
        {[
          { name: "projectTypeName", label: "Project Type", options: projectTypes },
          { name: "projectDivisiName", label: "Project Divisi Name", options: projectDivisi },
        ].map((field) => (
          <Col span={24} key={field.name}>
            <Form.Item name={field.name} label={field.label} rules={rules[field.name]}>
              <Select
                className="w-100"
                placeholder={`Select ${field.label}`}
                value={values[field.name] || undefined}
                onChange={(value) => handleProjectChange(value, field.name)}
              >
                {field.options.map((option) => (
                  <Option key={option.id} value={option[field.name]}>
                    {option[field.name]}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default ProjectField;
