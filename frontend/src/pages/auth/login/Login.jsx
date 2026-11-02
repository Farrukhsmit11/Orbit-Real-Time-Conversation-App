import LockOutlined from "@ant-design/icons/es/icons/LockOutlined";
import AuthStory from "../../../components/authStoryLeft/AuthStoryLeft.jsx";
import Brand from "../../../components/brand/Brand.jsx";
import Divider from "antd/es/divider";

export default function Login() {
  return (
    <main className="login-page">
      <AuthStory />

      <section className="login-form-panel">
        <div className="login-mobile-brand"><Brand /></div>
        <div className="login-form-card">
          <div className="welcome-tag"><span>✳</span> WELCOME BACK</div>
          <h2>Good to see you.</h2>
          <p className="login-subtitle">Sign in to pick up right where you left off.</p>

          <Divider />

          <p className="signup-copy">New around here? <a href="#create-account">Create an account</a></p>

        </div>

        <div className="login-legal"
        ><span>By continuing, you agree to our <a href="#terms">Terms</a>
            and
            <a href="#privacy">Privacy Policy</a>.
          </span><span className="secure-label">
            <LockOutlined />
            SECURE SIGN IN
          </span>
        </div>
      </section>
    </main>
  );
}
