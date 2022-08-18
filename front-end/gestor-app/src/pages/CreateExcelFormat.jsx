import React from "react";
import ExcelCreatorForm from "../components/ExcelCreatorForm";
import '../styles/CreateExcelFormat.css'

const CreateExcelFormat = () => {
    return (
      <div className="row background-custom">            
          <ExcelCreatorForm />        
      </div>
    );
}

export default CreateExcelFormat;