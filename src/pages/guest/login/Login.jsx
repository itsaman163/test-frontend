import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { errorMsg, successMsg } from "../../../helper/general";
import apiRequest from "../../../libraries/axios";

const { Title } = Typography;

const Login = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(false);
	const [isLogingIn, setIsLogingIn] = useState(false);

	const onFinish = async (formData) => {
		setIsLogingIn(true);
		try {
			const apiParams = {
				email: formData?.email,
				password: formData?.password,
			};

			const apiRes = await apiRequest("login", apiParams);
			if (apiRes?.settings?.success) {
				setIsLogin(true);
				successMsg(apiRes?.settings?.message);
				navigate("/dashboard");
			} else {
				errorMsg(apiRes?.settings?.message);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLogingIn(false);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="login">
			<Title level={2}>Login</Title>
			<Form
				form={form}
				name="login"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				layout="vertical"
				variant="filled"
			>
				<Form.Item
					label="Email"
					name="email"
					className="form-row"
					rules={[
						{ required: true, message: "Please enter your Email or Mobile Number!" },
						{ type: "email", message: "Please enter a valid email!" },
					]}
				>
					<Input placeholder="Email or mobile Number" />
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					className="form-row"
					rules={[
						{ required: true, message: "Please enter your password!" },
						{ min: 6, message: "Password must be at least 6 characters!" },
					]}
				>
					<Input.Password placeholder="Password" />
				</Form.Item>
				<Form.Item className="form-action">
					<Button
						type="primary"
						htmlType="submit"
						loading={isLogingIn}
						block
						shape="round"
						className="btn-primary-gradient"
					>
						Login
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
