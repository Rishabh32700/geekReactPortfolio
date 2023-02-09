import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainContent from "./components/maincontent/MainContent";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
