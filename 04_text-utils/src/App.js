import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils"></Navbar>
      <TextForm heading="Enter your Text to Analyze below"></TextForm>
    </div>
  );
}

export default App;
