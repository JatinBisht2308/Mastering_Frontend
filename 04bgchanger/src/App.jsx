import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center p-2 rounded-xl backdrop-blur bg-white/20 ...">
        <button className="mr-3  rounded-xl bg-red-500">Red</button>
        <button className="mr-3 rounded-xl bg-green-500 ">Green</button>
        <button className="mr-3 rounded-xl bg-blue-500">Blue</button>
        <button className="rounded-xl bg-yellow-500">Yellow</button>
      </div>
    </>
  );
}

export default App;
