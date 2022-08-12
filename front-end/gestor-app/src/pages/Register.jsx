import React, { useState } from "react";
import { useNavigate } from 'react-router';
import M from 'materialize-css';
import '../styles/Register.css';

const API = process.env.REACT_APP_API;

const Register = () => {
    const [name, setName] = useState('');    
    const [cct, setCCT] = useState('');    
    const [roll, setRoll] = useState(0);
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        d_name: name,
        cct,
        email,
        password,
        roll,
      }),
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API}/register`, config);
        const data = await res.json();
        const status_code = res.status;
        M.toast({html: data['Message'], classes: 'rounded'});
        if(status_code == 200){
          navigate('/login');
        }
    }

    return (    
      <div className="row background-cut">
        <div className="col s12 m6 l3 form-container">
          <h3 className="title">Registro de docente</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="text" className="label">
              Nombre completo
            </label>
            <input type="text" className="input-form" value={name} onChange={e => setName(e.target.value)}/>
            <label htmlFor="text" className="label">
              Clave de centro de trabajo (CCT)
            </label>
            <input type="text" className="input-form" value={cct} onChange={e => setCCT(e.target.value)}/>
            <label id="label1" htmlFor="text" className="label">
              Cargo
            </label>
            <div>
              <p>
                <label>
                  <input name="group1" type="radio" value={roll} defaultChecked onClick={() => setRoll(0)}/>
                  <span>Maestro</span>                  
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" onClick={() => setRoll(1)}/>
                  <span>Director</span>
                </label>
              </p>
            </div>
            <label htmlFor="text" className="label">
              Email
            </label>
            <input type="text" className="input-form" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input type="password" className="input-form" value={password} onChange={e => setPassword(e.target.value)}/>
            <button className="btn-flat custom-btn-flat">
              Registrar
            </button>
          </form>
        </div>
      </div>
    );
}

export default Register;