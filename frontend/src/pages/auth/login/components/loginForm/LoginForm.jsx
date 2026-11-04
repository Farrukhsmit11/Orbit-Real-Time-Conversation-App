import { Button } from "antd";
import {
    ArrowRightOutlined,
    LockOutlined,
    MailOutlined,
} from "@ant-design/icons";
import FormInput from "../../../../../uiComponents/formInput/FormInput";
import { Formik } from "formik";
import FormPasswordInput from "../../../../../uiComponents/formPasswordInput/FormPasswordInput";
import { loginSchema } from "./Validation";
import { handleLogin } from "../../../../../store/features/actions/authActions";
import { useDispatch } from "react-redux";
import { Form as AntForm } from "antd"
import { useState } from "react";

const LoginForm = ({ onCreateAccount }) => {

    const dispatch = useDispatch();

    const [form] = AntForm.useForm();

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const onSubmit = async () => {
        try {
            await dispatch(handleLogin({
                email,
                password
            })).unwrap()

        } catch (error) {
            console.error("error logging in", error)
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    value={email}
                                    autoComplete="email"
                                />
                            </AntForm.Item>

                            <label htmlFor="login-password">Password</label>

                            <AntForm.Item>
                                <FormPasswordInput
                                    prefix={<LockOutlined />}
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    autoComplete="current-password"
                                />
                            </AntForm.Item>

                            <div className="auth-footer">
                                <Button
                                    className="login-submit"
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    onClick={onSubmit}
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