import React from "react";
import SchoolRegisterForm from "../components/SchoolRegisterForm";
import '../styles/SchoolRegisterFormContainer.css'

const SchoolRegisterFormContainer = () => {
    return (
      <div className="col s12 m6 l3 form-container">
        <h3 className="title">Registro de institución</h3>
        <SchoolRegisterForm />
      </div>
    );
}

export default SchoolRegisterFormContainer;