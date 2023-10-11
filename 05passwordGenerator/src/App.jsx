import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersPresent, setNumberPresent] = useState(false);
  const [characterPresent, setCharacterPresent] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersPresent) str += "0123456789";
    if (characterPresent) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let c = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(c);
    }
    console.log(pass.length + " characters passed "+ pass);
    setPassword(pass);
  }, [numbersPresent, characterPresent, length]);
  useEffect(() => {
    passwordGenerator();
  }, [numbersPresent, characterPresent, length, passwordGenerator]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-wrap flex-col content-center text-white backdrop-blur-sm bg-white/20 px-10 p-10 rounded-xl">
        <div className="flex text-black w-full mb-2">
          <input
            type="text"
            className=" p-2 rounded-l-md w-full text-orange-400 text-md border-none font-semibold"
            value={password}
          />
          <button className="bg-blue-500 p-2 rounded-r-md text-white">
            copy
          </button>
        </div>
        <div className="flex ">
          <input
            type="range"
            name="lengthRange"
            min={6}
            max={50}
            id="lr"
            className="mr-2"
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
          <label className="mr-4">Length {length}</label>
          <input
            type="checkbox"
            name="number"
            id="num"
            className="mr-1"
            onClick={() => {
              if (numbersPresent) {
                setNumberPresent(false);
              } else {
                setNumberPresent(true);
              }
            }}
          />
          <label htmlFor="num" className="mr-3">
            Numbers
          </label>
          <input
            type="checkbox"
            name="character"
            id="char"
            className="mr-1"
            onClick={() => {
              if (characterPresent) {
                setCharacterPresent(false);
              } else {
                setCharacterPresent(true);
              }
            }}
          />
          <label htmlFor="num" className="mr-1">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
