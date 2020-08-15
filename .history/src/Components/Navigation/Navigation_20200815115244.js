import React from "react";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";

const Navigation = (props) => {
    return (
        <div className="Navigation">
            <p>settings</p>
            <Header />
            <Menu />
        </div>
    );
};

export default Navigation;
