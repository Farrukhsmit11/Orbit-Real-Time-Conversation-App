import { useState } from "react";
import AuthStory from "../../../components/authStoryLeft/AuthStoryLeft.jsx";
import LoginForm from "./components/loginForm/LoginForm.jsx";
import SignUp from "../signUp/SignUp.jsx";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className="login-page">
      <AuthStory />

      <section className="login-form-section">
        {showSignUp ? (
          <SignUp onLogin={() => setShowSignUp(false)} />
        ) : (
          <LoginForm onCreateAccount={() => setShowSignUp(true)} />
        )}
      </section>
    </main>
  );
};

export default Login;
