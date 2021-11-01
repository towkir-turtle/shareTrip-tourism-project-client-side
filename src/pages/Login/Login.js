import React from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";
import "./Login.css";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const { user, error, signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="login">
      <div>
        <h2>Please Sign In</h2>
        <Button className="login-btn" onClick={handleGoogleLogin}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
