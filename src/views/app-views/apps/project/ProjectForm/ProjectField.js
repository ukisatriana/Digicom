import React, { useEffect, useState } from "react";
import { Input, Row, Col, Card, Form, Select, Spin } from "antd";
import FirestoreService from "services/FirestoreService"; // Pastikan FirestoreService sudah dibuat

const { Option } = Select;

const rules = {
  projectName: [
    {
      required: true,
      message: "Please enter project name",
    },
  ],
  projectLocation: [
    {
      required: true,
      message: "Please enter project location",
    },
  ],
  projectTypeName: [
    {
      required: true,
      message: "Please select project type",
    },
  ],
  projectManagerName: [
    {
      required: true,
      message: "Please enter manager name",
    },
  ],
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
  const [projectTypes, setProjectTypes] = useState([]); // Untuk menyimpan data projectType
  const [projectDivisi, setProjectDivisi] = useState([]); // Untuk menyimpan data projectType
  const [loading, setLoading] = useState(false); // Untuk menandakan data sedang dimuat

  useEffect(() => {
	const fetchProjectTypes = async () => {
	  setLoading(true);
	  try {
		const types = await FirestoreService.getDocuments("projectType"); // Asumsikan FirestoreService bekerja
		if (Array.isArray(types)) {
		  setProjectTypes(types);
		  console.log("Project types: ", types);
		} else {
		  console.error("Invalid data format: ", types);
		}
	  } catch (error) {
		console.error("Error fetching project types:", error);
	  } finally {
		setLoading(false);
	  }
	};
  
	fetchProjectTypes();
  }, []);

  useEffect(() => {
	const fetchProjectDivisi = async () => {
	  setLoading(true);
	  try {
		const types = await FirestoreService.getDocuments("projectDivisi"); // Asumsikan FirestoreService bekerja
		if (Array.isArray(types)) {
		  setProjectDivisi(types);
		  console.log("Project types: ", types);
		} else {
		  console.error("Invalid data format: ", types);
		}
	  } catch (error) {
		console.error("Error fetching project types:", error);
	  } finally {
		setLoading(false);
	  }
	};
  
	fetchProjectDivisi();
  }, []);

  const handleProjectChange = (value, fieldName) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  };


  return (
    <Card title="Project">
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="projectName"
            label="Project Name"
            rules={rules.projectName}
          >
            <Input
              placeholder="Enter Project Name"
              value={values.projectName}
              onChange={(e) =>
                handleProjectChange(e.target.value, "projectName")
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="projectLocation"
            label="Project Location"
            rules={rules.projectLocation}
          >
            <Input
              placeholder="Enter Project Location"
              value={values.projectLocation}
              onChange={(e) =>
                handleProjectChange(e.target.value, "projectLocation")
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="projectManagerName"
            label="Manager Project Name"
            rules={rules.projectManagerName}
          >
            <Input
              placeholder="Enter Manager Project Name"
              value={values.projectManagerName}
              onChange={(e) =>
                handleProjectChange(e.target.value, "projectManagerName")
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
		<Form.Item
				name="projectTypeName"
				label="Project Type"
				rules={rules.projectTypeName}
				>
				<Select
					className="w-100"
					placeholder="Select Project Type"
					value={values.projectTypeName || undefined} // Gunakan undefined agar placeholder muncul
					onChange={(value) => handleProjectChange(value, "projectTypeName")}
				>
					{projectTypes.map((type) => (
					<Option key={type.id} value={type.projectTypeName}>
						{type.projectTypeName}
					</Option>
					))}
				</Select>
		</Form.Item>
        </Col>
        <Col span={24}>
		<Form.Item
				name="projectDivisiName"
				label="Project Divisi Name"
				rules={rules.projectDivisiName}
				>
				<Select
					className="w-100"
					placeholder="Select Project Type"
					value={values.projectDivisiName || undefined} // Gunakan undefined agar placeholder muncul
					onChange={(value) => handleProjectChange(value, "projectDivisiName")}
				>
					{projectDivisi.map((type) => (
					<Option key={type.id} value={type.projectDivisiName}>
						{type.projectDivisiName}
					</Option>
					))}
				</Select>
		</Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectField;
