import { Button, Divider, message } from "antd";
import {
    AppleOutlined,
    ArrowRightOutlined,
    GoogleOutlined,
    LockOutlined,
    MailOutlined,
} from "@ant-design/icons";
import FormInput from "../../../../../uiComponents/formInput/FormInput";
import { Formik } from "formik";
import FormPasswordInput from "../../../../../uiComponents/formPasswordInput/FormPasswordInput";
import { loginSchema } from "./Validation";
import { handleLogin } from "../../../../../store/features/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form as AntForm } from "antd"

const LoginForm = ({ onCreateAccount }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [form] = AntForm.useForm();

    const onSubmit = async (values) => {
        try {
            await dispatch(handleLogin({
                email: values.email,
                password: values.password
            })).unwrap()

            navigate("/dashboard")

        } catch (error) {
            message.error(error?.message ?? "Unable to sign in. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="auth-main">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="welcome-tag">
                        <span>✳</span> WELCOME BACK
                    </div>

                    <h2>Good to see you.</h2>
                    <p className="login-subtitle">
                        Sign in to pick up right where you left off.
                    </p>
                </div>

                <Formik
                    initialValues={{ email: "", password: "", rememberMe: true }}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                >
                    {({
                        handleSubmit,
                    }) => (

                        <AntForm
                            className="auth-form"
                            onSubmit={handleSubmit}
                            form={form}
                            layout="vertical"
                        >
                            <label htmlFor="login-email">Email address</label>

                            <AntForm.Item>
                                <FormInput
                                    id="login-email"
                                    prefix={<MailOutlined />}
                                    placeholder="you@example.com"
                                    type="email"
                                    autoComplete="email"
                                />
                            </AntForm.Item>

                            <label htmlFor="login-password">Password</label>

                            <AntForm.Item>
                                <FormPasswordInput
                                    prefix={<LockOutlined />}
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                />
                            </AntForm.Item>

                            <div className="auth-footer">
                                <Button
                                    className="login-submit"
                                    type="primary"
                                    htmlType="submit"
                                    block
                                >
                                    Sign in to Orbit <ArrowRightOutlined />
                                </Button>

                                <p className="signup-copy">
                                    Don&apos;t have an account?{" "}
                                    <a
                                        href="#signup"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            onCreateAccount?.();
                                        }}
                                    >
                                        Create one
                                    </a>
                                </p>
                            </div>
                        </AntForm>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;