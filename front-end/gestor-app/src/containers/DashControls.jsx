import React from "react";
import '../styles/DashControls.css';

const DashControls = ({isSchoolResgiter, schoolName, userName, isProfessor}) =>{

    return (
      <div className="col m2 l2 dash-controls">
        <a className="row inst-header" href="#">
          <div className="header-text-dash">DASHBOARD</div>
          <div className="col l9 inst-header-text">
            <div>{isSchoolResgiter ? schoolName : <>Aun no hay escuela</>}</div>
          </div>
          <div className="col m12 l3">
            <i className="material-icons inst-icon">account_circle</i>
          </div>
        </a>
        <div className="row prof-text-container">
          <div className="prof-info">Prof. {userName}</div>
          {isProfessor ? <div className="group-info">Grupo 0B</div> : null}
        </div>
        <a className="row export-container" href="#">
          <div className="col l9 export-text">Exportar a Excel</div>
          <i className="col s12 l3 material-icons export-icon">file_download</i>
        </a>
      </div>
    );
}

export default DashControls;