import AuthStory from "../../../components/authStoryLeft/AuthStoryLeft.jsx";
import LockOutlined from "@ant-design/icons/es/icons/LockOutlined";
import Divider from "antd/es/divider";

const Login = () => {
  return (
    <main className='login-page'>
      <AuthStory />

      <section className='login-form-section'>
        <div className="login-mobile-brand">
          <div className="auth-card">

            <div className="welcome-tag"><span>✳</span> WELCOME BACK</div>
            <h2>Good to see you.</h2>
            <p className="login-subtitle">Sign in to pick up right where you left off.</p>

            <Divider />
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
        </div>
      </section>

    </main >
  )
}

export default Login