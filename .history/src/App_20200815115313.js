import React from "react";
import CoffeeBuilder from "../src/Components/CoffeeBuilder/CoffeeBuilder";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <CoffeeBuilder />
            <p>OrderSummary.js</p>
        </div>
    );
};

export default App;
