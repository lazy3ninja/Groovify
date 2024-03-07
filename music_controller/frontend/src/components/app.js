import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./homepage";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
    render() {
        return (
        <div className= "center">
=======
  render() {
    return (
      <div className="center">
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);