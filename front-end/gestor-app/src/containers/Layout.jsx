import React from "react";
import '../styles/Layout.css'

const Layout = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;