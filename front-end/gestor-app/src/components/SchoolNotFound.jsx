import React from "react";
import '../styles/SchoolNotFound.css';

const SchoolNotFound = () => {
   
    return (
        <div className="col s12 m12 l12 school-view">
            <h3 className="title">¡Aun no has registrado una escuela!</h3>
            <a className="btn custom-register-school-btn" href="/get-excel">
                Registrar escuela
                <i className="material-icons right">send</i>
            </a>
        </div>
    );
}

export default SchoolNotFound;