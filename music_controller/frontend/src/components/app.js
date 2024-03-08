import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./homepage";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
        <div className= "center">
        <HomePage />
        
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
