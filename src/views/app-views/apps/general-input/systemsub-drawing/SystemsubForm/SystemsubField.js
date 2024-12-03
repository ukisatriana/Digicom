import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Input, Upload, message, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { storage } from 'configs/FirebaseConfig'; // Adjust this path
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import FirestoreService from 'services/FirestoreService';

const { Dragger } = Upload;
const { Option } = Select;

// const projectList = ['Cijurai', 'Harbour Road', 'Cipali', 'Pik'];

const SystemSubField = ({ handleFileUpload }) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [commSysDeff, setCommSysDeffNo] = useState([]); // Untuk menyimpan data projectType
  const [loading, setLoading] = useState(false); // Untuk menandakan data sedang dimuat
  const [values, setValues] = useState('');

  useEffect(() => {
    const fetchProjectTypes = async () => {
      setLoading(true);
      try {
      const types = await FirestoreService.getDocuments("commSysDeff"); // Asumsikan FirestoreService bekerja
      if (Array.isArray(types)) {
        setCommSysDeffNo(types);
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

    const storageRef = ref(storage, `systemSubsystem/drawing/${file.name}`);
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
				name="commSysDeffNo"
				label="Comm System Deff No"
				// rules={rules.projectTypeName}
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
            name="drawingCodeNumber"
            label="Drawing Code Number"
            rules={[{ required: true, message: 'Please enter Drawing Code Number' }]}
          >
            <Input placeholder="Drawing Code Number" />
          </Form.Item>

          <Form.Item
            name="drawingCodeName"
            label="Drawing Code Name"
            rules={[{ required: true, message: 'Please enter Drawing Coode Name' }]}
          >
            <Input placeholder="Drawing Code Name" />
          </Form.Item>
         
        </Card>
      </Col>
      <Col xs={24} sm={24} md={7}>
        <Card title="Document Drawing Code">
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

export default SystemSubField;
