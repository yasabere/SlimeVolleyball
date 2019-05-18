import React, { Component } from "react";
import logo from "./logo.svg";
import { Game } from "./components/game";
import "./App.css";
//import { Socket } from "dgram";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Game Engine</h1>
        </header>
        <Game />
        <p className="App-intro">
          To get started, edit test<code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
