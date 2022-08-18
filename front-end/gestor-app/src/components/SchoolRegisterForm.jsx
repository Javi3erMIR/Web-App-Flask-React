import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import M from "materialize-css";
import '../styles/SchoolRegisterForm.css'

const API = process.env.REACT_APP_API;

const SchoolRegisterForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [cct, setCCT] = useState(''); 
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const formData = new FormData();
  
  
  const handleFileUpload = (e) => setFile(e.target.files[0]);
  
  
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    formData.append('schoolName', schoolName);
    formData.append('cct', cct);
    formData.append('rawFile', file);
    const config = {
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        "Content-Type": "multipart/form-data",
      },
    };
    await axios.post(`${API}/register-school/${sessionStorage.getItem('user_id')}`, formData, config)
    .then(res => {
      M.toast({html:res.data.Message, classes: 'rounded'});
      navigate('/dashboard/' + sessionStorage.getItem('user_id'));
    })
    .catch(error => {
      console.log(error);
      M.toast({html:'Error', classes: 'rounded'});
      //navigate('/login');
    });
    
  }


  return (
    <>
      <form className="form" onSubmit={e => handleOnSubmit(e)}>
        <label htmlFor="text" className="label">
          Nombre de la institución
        </label>
        <input type="text" className="input-form" onChange={e => setSchoolName(e.target.value)}/>
        <label htmlFor="text" className="label">
          Clave de centro de trabajo (CCT)
        </label>
        <input type="text" className="input-form" onChange={e => setCCT(e.target.value)}/>
        <label htmlFor="text" className="label">Subir arhivo de grupos.</label>
        <input type="file" className="waves-effect waves-light btn-flat" onChange={e => handleFileUpload(e)}/>
        <button className="waves-effect waves-light btn-flat">
          Registrar
        </button>
      </form>
    </>
  );
}

export default SchoolRegisterForm;