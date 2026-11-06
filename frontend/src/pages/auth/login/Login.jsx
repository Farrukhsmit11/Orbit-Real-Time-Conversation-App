import { useState } from "react";
import AuthStory from "../../../components/authStoryLeft/AuthStoryLeft.jsx";
import Brand from "../../../components/brand/Brand.jsx";
import LoginForm from "./components/loginForm/LoginForm.jsx";
import SignUp from "../signUp/SignUp.jsx";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className="login-page">
      <section className="login-form-section">
        <Brand className="login-panel-brand" />
        {showSignUp ? (
          <SignUp onLogin={() => setShowSignUp(false)} />
        ) : (
          <LoginForm onCreateAccount={() => setShowSignUp(true)} />
        )}
      </section>

      <AuthStory />
    </main>
  );
};

export default Login;
