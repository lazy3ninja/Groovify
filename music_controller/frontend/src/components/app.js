//we have a bunch of components and components can render other components
//so the entry point to our application is going to be our first component which we called app
//what is happening is app component is being placed inside the app div of the html

import React , { Component } from "react";
import { render }from "react-dom";
import HomePage from "./HomePage";



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
        <HomePage />
        
        </div>
        );
    }
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
