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
        if(value < 20)
        {
          // what will happen if we set the value three times will it increase three times se the reason in the notes if not then how can we acheive it.
          // setValue(value+1);
          // setValue(value+1);
          // setValue(value+1);
          // the below code tells how we do that
          setValue((previousValue) => previousValue +1);
          setValue((previousValue) => previousValue +1);
          setValue((previousValue) => previousValue +1);
        }
      }}>Add value</button>
      <br />
      <br />
      <button
      onClick={() =>{
        if(value>0)
        setValue(value-1);
      }}
      >Minus value</button>
    </>
  )
}

export default App
