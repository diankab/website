import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MessageBox } from "./components";
import { LoginForm } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dianos login</header>
      <LoginForm />
    </div>
  );
}

export default App;
