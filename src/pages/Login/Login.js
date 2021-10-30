import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { user, error, signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={signInUsingGoogle}>Google Sign In</button>
    </div>
  );
};

export default Login;
