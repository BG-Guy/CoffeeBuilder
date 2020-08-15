import React, { Component } from "react";

class CoffeeBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                sugar: 0,
                coffee: 0,
                water: 0,
                milk: 0,
            },
            totalPrice: 0,
            purchasing: false,
        };
    }

    render() {
        return (
            <div>
                <p>CoffeeSlider.js</p>
                <p>CoffeeControls.js</p>
                <p>OrderSummary.js</p>
            </div>
        );
    }
}

export default CoffeeBuilder;
