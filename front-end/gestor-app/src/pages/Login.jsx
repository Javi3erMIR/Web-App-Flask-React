import React, { useState, useContext }from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router";
import M from 'materialize-css';
import "../styles/Login.css";

const API = process.env.REACT_APP_API;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/login`, config);

    const data = await res.json();
    M.toast({html: data['Message'], classes: 'rounded'});
    if(res.status == 200){      
      sessionStorage.setItem('token', data['token']);
      setUser(data['user_id']);
      navigate('/dashboard/' + data['user_id']);
    }
  };

  return (
    <div className="row background-cut">
      <div className="col s12 m6 l3 form-container">
        <h3 className="title">Bienvenido</h3>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            className="input-form"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            className="input-form"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-flat">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;