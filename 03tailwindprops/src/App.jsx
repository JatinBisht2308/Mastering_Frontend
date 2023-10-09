import "./App.css";
import Card from "./components/Card";
function App() {
  const myArr = [1,2,3,4];
  const myObj = {
    college: "DIT University",
    rollNo: "200102567"
  }
  return (
    <>
      <h1 className=" bg-sky-500 text-white rounded-lg px-2 py-2 mb-2">
        Tailwind css
      </h1>
      {/* you cannot pass array from here you have to declare it as a variable then you can pass it in props either array or object */}
      {/* <Card name="Jatin" myArr=[1,2,3,4] /> myObj={college:"DIT University"} */}
      {/* rather than it you can set the array as variable then pass it here in the props */}
      <Card name="Jatin" myArr={myArr} myObj={myObj} btnText="click me" />
    </>
  );
}

export default App;
