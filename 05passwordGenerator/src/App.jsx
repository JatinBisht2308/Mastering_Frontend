import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersPresent, setNumberPresent] = useState(false);
  const [characterPresent, setCharacterPresent] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const password = "jatin bisht";
    if (numbersPresent && characterPresent) {
      setPassword("j595%3#2@3#9(6^3#");
    } else if (numbersPresent || characterPresent) {
      if (numbersPresent) {
        setPassword("j5a3t2i3n9");
      } else {
        setPassword("5%3#2@3#9(6^3#");
      }
    } else {
      setPassword(password);
    }
  }, [numbersPresent, characterPresent, length]);

  return (
    <div className="w-full h-screen flex content-center items-center">
      <div className="fixed flex flex-wrap flex-col content-center text-white backdrop-blur-sm bg-white/20 px-10 p-10 rounded-xl">
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
          <input type="range" name="lengthRange" id="lr" className="mr-2" />
          <p className="mr-4">Length {length}</p>
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
