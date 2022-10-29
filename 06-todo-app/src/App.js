import React, {useState, useEffect} from 'react';
import Input from './components/Form/Input';
import Navbar from './components/Navbar/Navbar';
import RenderList from './components/RenderList/RenderList';

export default function App() {
  const [lists, setList] = useState([]);

  const addNoteHandler = (text) => {
      setList((prevText) => {
        return [...prevText, text]
      })
  }

  return (
    <>
        <Navbar />
        <Input onAddNote={addNoteHandler}/>
        <RenderList list={lists}/>
    </>
  )
}