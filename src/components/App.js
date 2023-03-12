import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const handleInput = (event) => {
    if (event.target.id === "text-input") {
      setText(`${text}` + event.target.value);
      console.log(`> Input in #text-input is ${text}`);
    } else {
      setNum(`${num}` + event.target.value,);
      console.log(`> Input in #num-input is ${num}`);
    }
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput} />

      <br />
      <br />

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type={'number'} onChange={handleInput} />
      <br />
    </div>
  )
}


export default App;
