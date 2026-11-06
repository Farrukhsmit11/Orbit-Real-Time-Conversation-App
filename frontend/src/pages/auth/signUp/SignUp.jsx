import "../../auth/Auth.css";
import FormInput from "../../../uiComponents/formInput/FormInput";
import { Form as AntForm, Button, message } from "antd";
import FormPasswordInput from "../../../uiComponents/formPasswordInput/FormPasswordInput";
import { useDispatch } from "react-redux";
import { handleSignup } from "../../../store/features/actions/authActions";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const SignUp = ({ onLogin }) => {
  const [form] = AntForm.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await dispatch(handleSignup(values)).unwrap();
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
            <h1 className="auth-title">Create Account</h1>

            <p className="auth-subtitle">
              Your conversations, all in one place. Join Orbit and Get started.
            </p>

            <Formik
              initialValues={{ email: "", password: "", rememberMe: true }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
              }) => (
                <AntForm
                  className="auth-form"
                  form={form}
                  layout="vertical"
                  noValidate
                >
                  <AntForm.Item
                    label={<span className="form-label">Name</span>}
                  >
                    <FormInput
                      placeholder="Enter your Name"
                      type="name"
                      name="name"
                      className="c-input"
                    ></FormInput>
                  </AntForm.Item>

                  <AntForm.Item
                    label={<span className="form-label">Email</span>}
                  >
                    <FormInput
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      className="c-input"
                    ></FormInput>
                  </AntForm.Item>

                  <AntForm.Item
                    label={<span className="form-label">Password</span>}
                  >
                    <FormPasswordInput
                      placeholder="Enter Password"
                      className="c-input"
                    ></FormPasswordInput>
                  </AntForm.Item>

                  <div className="form-footer">
                    <a href="#">Forgot Password?</a>
                  </div>

                  <div className="auth-actions">
                    <Button
                      className="submit-btn-black"
                      onClick={() => onCreateAccount()}
                    >
                      Sign Up
                    </Button>

                    <Button className="submit-btn" onClick={() => onLogin()}>
                      Log in
                    </Button>
                  </div>
                </AntForm>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
