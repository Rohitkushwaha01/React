import React from 'react';
import './App.css';
import RenderNumber from './components/Numbers/RenderNumber';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Input />
      <RenderNumber />
    </div>
  );
}

export default App;
