import React from "react";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import "./Navigation.css";

const Navigation = (props) => {
    return (
        <div className="Navigation">
            <Settings />
            <Header />
            <Menu />
        </div>
    );
};

export default Navigation;
