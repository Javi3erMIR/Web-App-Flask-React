import React, { useEffect, useState } from "react";
import SchoolRegisterFormContainer from "../containers/SchoolRegisterFormContainer";
import '../styles/SchoolRegister.css'

const RegisterSchool = () => {
    const [token, setToken] = useState(false);

    const getToken = () => {
        if (sessionStorage.getItem('token') != null || sessionStorage.getItem('token') != undefined) 
            setToken(true);
    };

    useEffect(() => {
        getToken();
    } , []);


    return (
      <>
        {token ? (
          <div className="row background-cut">
            <SchoolRegisterFormContainer />
          </div>
        ) : <>La sesion caducó</>}
      </>
    );
}

export default RegisterSchool;