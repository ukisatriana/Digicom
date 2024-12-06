import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Input, Upload, message, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { storage } from 'configs/FirebaseConfig'; // Adjust this path
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import FirestoreService from 'services/FirestoreService';

const { Dragger } = Upload;
const { Option } = Select;

// const projectList = ['Cijurai', 'Harbour Road', 'Cipali', 'Pik'];

const CommProcedureField = ({ handleFileUpload }) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [projectName, setProjectName] = useState([]); // Untuk menyimpan data projectType
  const [loading, setLoading] = useState(false); // Untuk menandakan data sedang dimuat
  const [values, setValues] = useState('');

  useEffect(() => {
    const fetchProjectTypes = async () => {
      setLoading(true);
      try {
      const types = await FirestoreService.getDocuments("project"); // Asumsikan FirestoreService bekerja
      if (Array.isArray(types)) {
        setProjectName(types);
        // console.log("Comm System Deff: ", types);
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

    const handleProjectChange = (value, fieldName) => {
      setValues({
        ...values,
        [fieldName]: value,
      });
    };

  const handleUploadChange = async ({ file }) => {
    if (!file) return;

    const storageRef = ref(storage, `commProcedureDocs/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploadLoading(true); // Start loading animation

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress); // Update progress percentage
      },
      (error) => {
        message.error(`Upload failed: ${error.message}`);
        setUploadLoading(false); // Stop loading animation on error
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        handleFileUpload(downloadURL); // Pass the file URL to parent
        message.success('File uploaded successfully!');
        setUploadLoading(false); // Stop loading animation on success
        setUploadProgress(0); // Reset progress
      }
    );
  };

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={17}>
        <Card title="Basic Info">

        <Form.Item
				name="projectName"
				label="Nama Project"
				// rules={rules.projectTypeName}
				>
				<Select
					className="w-100"
					placeholder="Select Project Name"
					value={values.projectName || undefined} // Gunakan undefined agar placeholder muncul
					onChange={(value) => handleProjectChange(value, "projectName")}
				>
					{projectName.map((type) => (
					<Option key={type.id} value={type.projectName}>
						{type.projectName}
					</Option>
					))}
				</Select>
		</Form.Item>
                
        <Form.Item
            name="procedureName"
            label="Procedure Name"
            rules={[{ required: true, message: 'Please enter Procedure Name' }]}
          >
            <Input placeholder="Identificantion Number" />
          </Form.Item>
          <Form.Item
            name="identificatioNo"
            label="Identification No"
            rules={[{ required: true, message: 'Please enter Identification Number' }]}
          >
            <Input placeholder="Identificantion Number" />
          </Form.Item>

          <Form.Item
            name="method"
            label="Method"
            rules={[{ required: true, message: 'Please enter Method' }]}
          >
            <Input placeholder="Method" />
          </Form.Item>

          <Form.Item
            name="procedureSystem"
            label="System"
            rules={[{ required: true, message: 'Please enter System' }]}
          >
            <Input placeholder="System" />
          </Form.Item>

          <Form.Item
            name="procedureSubSystem"
            label="SubSystem"
            rules={[{ required: true, message: 'Please enter SubSystem' }]}
          >
            <Input placeholder="SubSystem" />
          </Form.Item>
          <Form.Item
            name="procedureSheet"
            label="Sheet"
            rules={[{ required: true, message: 'Please enter Sheet' }]}
          >
            <Input placeholder="Sheet" />
          </Form.Item>
         
        </Card>
      </Col>
      <Col xs={24} sm={24} md={7}>
        <Card title="Document Comm Procedure">
          <Dragger beforeUpload={() => false} onChange={handleUploadChange}>
            {uploadLoading ? (
              <div style={{ textAlign: 'center' }}>
                <LoadingOutlined style={{ fontSize: 24 }} />
                <p>Uploading... {uploadProgress}%</p>
              </div>
            ) : (
              <p>Click or drag file to upload</p>
            )}
          </Dragger>
        </Card>
      </Col>
    </Row>
  );
};

export default CommProcedureField;
