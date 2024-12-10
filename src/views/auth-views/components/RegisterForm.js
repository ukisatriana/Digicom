import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert, Select } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'store/slices/authSlice';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const { Option } = Select;

const rules = {
	email: [
		{ 
			required: true,
			message: 'Please input your email address'
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your password'
		}
	],
	
	confirm: [
		{ 
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(_, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

// eslint-disable-next-line no-unused-vars
const onSignUp = async () => {
    Form.validateFields().then(async values => {
        showLoading();
        const auth = getAuth();
        const db = getFirestore();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const userId = userCredential.user.uid;

            // Simpan data pengguna ke Firestore
            await setDoc(doc(db, "users", userId), {
                email: values.email,
                role: values.role,
                username: values.username,
                projectName: values.projectName
            });

            signUp(values); // Tindakan tambahan jika diperlukan
        } catch (error) {
            console.error("Error registering user:", error);
        }
    });
};

const selectRole =[ 'admin', 'user', 'owner', 'contractor', 'subcon' ]

export const RegisterForm = (props) => {

	const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect = true } = props
	const [form] = Form.useForm();

	const navigate = useNavigate();

	const onSignUp = () => {
    	form.validateFields().then(values => {
			showLoading()
			signUp(values)
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	useEffect(() => {
		if (token !== null && allowRedirect) {
			navigate(redirect)
		}
		if (showMessage) {
			const timer = setTimeout(() => hideAuthMessage(), 3000)
			return () => {
				clearTimeout(timer);
			};
		}
	});
	
	return (
		<>
			<motion.div 
				initial={{ opacity: 0, marginBottom: 0 }} 
				animate={{ 
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0 
				}}> 
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
				

				<Form.Item 
					name="username" 
					label="Nama Personel" 
					// rules={rules.username}
					hasFeedback
				>
					<Input placeholder='input username' />
				</Form.Item>
				<Form.Item 
					name="projectName" 
					label="Project Name" 
					// rules={rules.projectName}
					hasFeedback
				>
					<Input placeholder='Input Project Name'/>
				</Form.Item>
				
				<Form.Item 
					name="email" 
					label="Email" 
					rules={rules.email}
					hasFeedback
				>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="confirm" 
					label="ConfirmPassword" 
					rules={rules.confirm}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>

				<Form.Item
					name="role"
					label="Role"
					rules={[
						{
							required: true,
							message: 'Please select your role'
						}
					]}
				>
					<Select placeholder="Select your role">
						{selectRole.map((role, index) => (
							<Option key={index} value={role}>{role}</Option>
						))}
					</Select>
				</Form.Item>



				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
