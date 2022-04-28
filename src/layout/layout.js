import React from "react";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import "./layout.css";


const Layout = ({ children }) => {

    return (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    )
}
export default Layout;