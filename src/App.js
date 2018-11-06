import React, { Component } from "react";
import "./App.css";
import DynamicForm from "./Components/form/dynamic-form";

class App extends Component {
  render() {
    return (
      <div className="container">
        <DynamicForm />
      </div>
    );
  }
}

export default App;
