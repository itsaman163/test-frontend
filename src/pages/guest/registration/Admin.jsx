import React from "react";
import { Form, Input, Button, Typography } from "antd";
import apiRequest from "../../../libraries/axios";
import { errorMsg, successMsg } from "../../../helper/general";

const { Title } = Typography;
const Admin = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const apiParams = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        role: 'admin'
      }
      const apiRes = await apiRequest("registration", apiParams);

      if (apiRes?.settings?.success) {
        successMsg(apiRes?.settings?.message);
        form.resetFields();
      } else {
        errorMsg(apiRes?.settings?.message);
      }
    } catch (error) {
    } finally {
    }


  };

  const onFinishFailed = (errorInfo) => {
    console.error("Form Submission Failed:", errorInfo);
  };
  return (
    
    <div className="admin-form">
      <Title level={2} className="mt-0">Admin Registration</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        name="admin_registration"
        initialValues={{ remember: true }}
        onFinishFailed={onFinishFailed}
        variant="filled"
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            { required: true, message: "Please input your First Name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            { required: true, message: "Please input your Last Name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="form-action">
          <Button
            type="primary"
            htmlType="submit"
            block
            shape="round"
            className="btn-primary-gradient">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Admin;
