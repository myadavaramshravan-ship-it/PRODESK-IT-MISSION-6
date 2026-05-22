import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogin() {
    login();

    console.log("Your logged in as guest");
    navigate("/checkout");
  }

  return (
    <div className="loginpage">
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login As Guest
      </button>
    </div>
  );
}