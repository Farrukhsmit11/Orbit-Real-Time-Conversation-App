import "../../auth/Auth.css";
import FormInput from "../../../uiComponents/formInput/FormInput";
import { Form as AntForm, Button, message } from "antd";
import {
  ArrowRightOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import FormPasswordInput from "../../../uiComponents/formPasswordInput/FormPasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { handleSignup } from "../../../store/features/actions/authActions";
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onLogin }) => {
  
  const [form] = AntForm.useForm();

  const { signUpLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    try {
      await dispatch(handleSignup(values))
        .unwrap();
      message.success("Account created successfully");
      if (onLogin) {
        onLogin();
      } else {
        navigate("/");
      }

    } catch (error) {
      message.error(error?.message ?? "Unable to create your account");
    }
  };

  return (
    <>
      <div className="auth-main">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Your Account</h2>
            <p>Join To Start Conversations</p>
          </div>

          <AntForm
            form={form}
            className="auth-form"
            layout="vertical"
            initialValues={{ name: "", email: "", password: "" }}
            onFinish={handleSubmit}
          >
            <AntForm.Item
              label="Name"
              name="name"
            >
              <FormInput
                name="name"
                prefix={<UserOutlined />}
                placeholder="Enter your name"
                autoComplete="name"
              />
            </AntForm.Item>

            <AntForm.Item
              label="Email address"
              name="email"

            >
              <FormInput
                name="email"
                prefix={<MailOutlined />}
                placeholder="you@example.com"
                type="email"
                autoComplete="email"
              />
            </AntForm.Item>

            <AntForm.Item
              name="password"
              label="Password"

            >
              <FormPasswordInput
                name="password"
                prefix={<LockOutlined />}
                placeholder="Enter your password"
                autoComplete="new-password"
              />
            </AntForm.Item>

            <Button
              className="login-submit"
              type="primary"
              htmlType="submit"
              block
              loading={signUpLoading}
            >
              Create Account With Orbit <ArrowRightOutlined />
            </Button>
          </AntForm>
        </div>
      </div>
    </>
  );
};

export default SignUp;
