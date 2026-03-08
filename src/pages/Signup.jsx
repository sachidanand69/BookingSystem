import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Signup(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("USER");

  const navigate = useNavigate();

  const signup = async ()=>{

    await api.post("/auth/create",{
      username,
      password,
      role
    });

    alert("User created");
    navigate("/login");
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

  return(
    <div style={containerStyle}>

      <div style={cardStyle}>

        <h2 style={{textAlign:"center"}}>Create Account</h2>

        <input
          style={inputStyle}
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <select
          style={inputStyle}
          value={role}
          onChange={(e)=>setRole(e.target.value)}
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button style={buttonStyle} onClick={signup}>
          Sign Up
        </button>

      </div>

    </div>
  )
}

export default Signup;
