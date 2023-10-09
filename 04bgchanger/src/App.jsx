import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap bottom-10 px-2 rounded-md p-2 flex justify-center backdrop-blur-sm bg-white/50">
        <button
          className="mr-3 p-1 px-3 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          className="mr-3 p-1 px-3 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className="mr-3 rounded-md p-1 px-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="mr-3 rounded-md bg-yellow-500 p-1 px-3 text-white hover:bg-yellow-600 transition-colors"
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="mr-3 rounded-md bg-black p-1 px-3 text-white hover:bg-slate-800 transition-colors"
          onClick={() => {
            setColor("black");
          }}
        >
          Black
        </button>
        <button
          className="rounded-md bg-white p-1 px-3 text-black hover:bg-slate-300 transition-colors"
          onClick={() => {
            setColor("white");
          }}
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;
