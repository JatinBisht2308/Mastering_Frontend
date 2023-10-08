import {useState}  from 'react';
import './App.css'

function App() {
  let val = 5;
  const [value,setValue] = useState(val);
  return (
    <>
      <h1>Chai or react</h1> 
      <h2>Counter value: {value}</h2>     
      <button onClick={() =>{
        setValue(value+1);
      }}>Add value</button>
      <br />
      <br />
      <button
      onClick={() =>{
        setValue(value-1);
      }}
      >Minus value</button>
    </>
  )
}

export default App
