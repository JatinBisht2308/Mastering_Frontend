let inputString = "";
//buttons is an array
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      inputString = eval(inputString);
      document.querySelector("input").value = inputString;
    } else if (e.target.innerHTML == "C") {
      inputString = "";
      document.querySelector("input").value = inputString;
    } else if (e.target.innerHTML == "DE") {
      // slice(0,-1) means delete -1 from the total length
      inputString = inputString.slice(0, -1);
      document.querySelector("input").value = inputString;
    } else if (e.target.innerHTML == "AC") {
      inputString = "";
      document.querySelector("input").value = inputString;
    } else if (e.target.innerHTML == "") {
    } else if (e.target.innerHTML == "") {
    } else {
      // console.log(e.target);
      inputString += e.target.innerHTML;
      // console.log(inputString);
      document.querySelector("input").value = inputString;
    }
  });
});
