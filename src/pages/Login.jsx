import { useState } from "react";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {

    const res = await api.post("/auth/login", {
      username: email,
      password: password
    });

    console.log(res);

    localStorage.setItem("id", String(res.data.data.id));
    localStorage.setItem("role", String(res.data.data.role));

    dispatch(loginSuccess(res.data));
    navigate("/dashboard");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#4facfe,#00f2fe)",
    fontFamily: "Arial"
  };

  const cardStyle = {
    background: "white",
    padding: "40px",
    width: "320px",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px"
  };

  const buttonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#4facfe",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  };

  const signupButtonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#28a745",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "10px"
  };

  return(
    <div style={containerStyle}>

      <div style={cardStyle}>

        <h2 style={titleStyle}>Login</h2>

        <input
          style={inputStyle}
          placeholder="Username"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button style={buttonStyle} onClick={login}>
          Login
        </button>

        <button style={signupButtonStyle} onClick={goToSignup}>
          Sign Up
        </button>

      </div>

    </div>
  )
}

export default Login;