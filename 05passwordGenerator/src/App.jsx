import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersPresent, setNumberPresent] = useState(false);
  const [characterPresent, setCharacterPresent] = useState(false);
  const [password,setPassword] = useState("");
  return (
    <div className="w-full h-screen flex content-center items-center">
      <div className="fixed flex flex-wrap flex-col content-center text-white backdrop-blur-sm bg-white/20 px-10 p-10 rounded-xl">
        <div className="flex text-black w-full">
          <input type="text" className=" p-2 rounded-l-md w-full text-orange-400 text-md border-none" />
          <button className="bg-blue-500 p-2 rounded-r-md text-white">
            copy
          </button>
        </div>
        <div className="flex ">
          <input type="range" name="lengthRange" id="lr" className="mr-2" />
          <p className="mr-4">Length {length}</p>
          <input type="checkbox" name="number" id="num" className="mr-1" />
          <label htmlFor="num" className="mr-3">
            Numbers
          </label>
          <input type="checkbox" name="character" id="char" className="mr-1" />
          <label htmlFor="num" className="mr-1">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
