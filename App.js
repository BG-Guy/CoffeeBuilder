import React from "react";
import CoffeeBuilder from "../src/Components/CoffeeBuilder/CoffeeBuilder";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <p>Navigation</p>
            <CoffeeBuilder />
            <p>OrderSummary.js</p>
        </div>
    );
};

export default App;
