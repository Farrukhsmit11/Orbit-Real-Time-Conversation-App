import { Button, Form as AntForm, message, Checkbox } from "antd";
import FormInput from "../../../../../uiComponents/formInput/FormInput";
import { Formik } from "formik";
import FormPasswordInput from "../../../../../uiComponents/formPasswordInput/FormPasswordInput";
import { loginSchema } from "./Validation";
import { handleLogin } from "../../../../../store/features/actions/authActions";
import { useDispatch } from "react-redux";
import "./LoginForm.css"

const LoginForm = ({ onCreateAccount }) => {
    const dispatch = useDispatch();

    const onSubmit = async ({ email, password }) => {
        try {
            await dispatch(handleLogin({
                email,
                password
            })).unwrap()
        } catch (error) {
            console.error("Error logging in", error)
        }
    }

    return (
        <div className="auth-main">
            <div className="auth-card">
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">
                    Sign in to pick up where you left off and catch up with your people.
                </p>

                <Formik
                    initialValues={{ email: "", password: "", rememberMe: true }}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                >
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                    }) => (
                        <AntForm
                            className="auth-form"
                            onSubmit={handleSubmit}
                            layout="vertical"
                            noValidate
                        >
                            <AntForm.Item label={<span className="form-label">Email</span>}>
                                <FormInput
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    className="c-input"
                                >


                                </FormInput>
                            </AntForm.Item>

                            <AntForm.Item label={<span className="form-label">Password</span>}>
                                <FormPasswordInput
                                    placeholder="Enter Password"
                                    className="c-input"

                                >

                                </FormPasswordInput>
                            </AntForm.Item>


                            <div className="form-footer">
                                <a href="#">Forgot Password?</a>
                            </div>


                            <div className="auth-actions">
                                <Button className="submit-btn">Log in</Button>
                                <Button
                                    className="submit-btn-black"
                                    onClick={() => onCreateAccount()}
                                >Sign Up</Button>
                            </div>

                        </AntForm>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;