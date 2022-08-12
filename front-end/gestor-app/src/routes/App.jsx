import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";


const App = () => {
  const initialState = useInitialState();
  return(
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard/:user_id" element={<DashBoard />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;