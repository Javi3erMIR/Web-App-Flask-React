import React, { useEffect, useState }from "react";
import { useNavigate, useParams } from "react-router";
import DashControls from "../containers/DashControls";
import DashView from "../containers/DashView";
import axios from 'axios';
import '../styles/DashBoard.css';
 
const API = process.env.REACT_APP_API;


const DashBoard = () =>{
    const { user_id } = useParams();
    const [state, setState] = useState(false);
    const [server, setServer] = useState(false);
    const [userName, setUserName] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [isProfessor, setIsProfessor] = useState(false);
    const navigate = useNavigate();

    const config = {
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    };

    const loggingDash = async () => {
        axios.get(`${API}/dashboard/${user_id}`, config)
        .then(res => {
            if(res.state == 200) setState(true);
            if(res.data.isSchoolRegister) setServer(true);
            if(res.data.roll) setIsProfessor(true);
            setUserName(res.data.userName);
            if(res.data.schoolName) setSchoolName(res.data.schoolName);
        })
        .catch(error => {
            console.log(error);
            navigate('/login')
        });        
    }

    useEffect(() =>{
        loggingDash();
    }, [state]);

    return (
      <div className="row">
        {!state ? (
          <div>
            <DashControls
              isSchoolResgiter={server}
              isProfessor={isProfessor}
              userName={userName}
              schoolName={schoolName}
            />
            <DashView isSchoolResgiter={server} />
          </div>
        ) : null}
      </div>
    );
}

export default DashBoard;