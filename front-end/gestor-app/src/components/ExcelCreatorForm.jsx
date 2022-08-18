import React from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import FileDownload from 'js-file-download';
import M from 'materialize-css';
import '../styles/ExcelCreatorForm.css'

const API = process.env.REACT_APP_API;

const ExcelCreatorForm = () => {
    const navigate = useNavigate();

    const config = {
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        responseType: 'blob'
    };

    const handleOnDownload = (e) => {
        e.preventDefault();
        axios.get(`${API}/download-excel`, config)
        .then(res => {
            FileDownload(res.data, 'excel.xlsx');
            navigate('/registrar-escuela');
        })
        .catch(err => {
            console.log(err);
            M.toast({html: 'Error al descargar el archivo', classes: 'red'});
        })
    };

    const handleOnClick = (e) => {
        navigate('/registrar-escuela');
    };

    return (
      <div className="col s3 form-excel-container">
        <h3 className="title">Primero lo primero...</h3>
        <form className="form">
          <label htmlFor="text" className="label">
            Debes de descargar el formato de excel y llenarlo con los datos correspondientes para poder cargar los grupos. 
          </label>
          {/* <label htmlFor="text" className="label">
            ¿Cuantos grupos quieres registrar?
          </label>
          <input type="number" className="input-form"/> */}
          
          <button className="btn-flat" href="${API}/download-excel" onClick={e => handleOnDownload(e)}>
            Descargar archivo de grupos
          </button>
          <label htmlFor="text" className="label">
            Ó
          </label>

          <button className="btn-flat" onClick={e => handleOnClick(e)}>
            Ya tengo el archivo de grupos
          </button>
        </form>
      </div>
    );
}

export default ExcelCreatorForm;