import React from "react";
import Table from "../components/Table";
import SchoolNotFound from "../components/SchoolNotFound";
import '../styles/DashView.css';

const DashView = ({isSchoolResgiter}) => {
    return (
        <div className="col s12 m10 l10 dash-view">
            {!isSchoolResgiter ? 
                <SchoolNotFound /> 
            : 
                <Table />
            }
        </div>
    );
}

export default DashView;