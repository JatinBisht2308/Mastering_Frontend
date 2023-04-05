let inputString = "";
//buttons is an array
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if (inputString.includes("%")) {
        // iafp -> input array for percentage
        const iafp = inputString.split("%");
        console.log(iafp);
        inputString = (iafp[0] * iafp[1]) / 100;
        document.querySelector("input").value = inputString;
      } else if (inputString.includes("$")) {
        // we will convert the dollar(new zealand) amount to the inr amount
        let dArray = inputString.split("$");
        console.log(dArray);
        let inrAmount = dArray[0] * 51;
        document.querySelector("input").value = inrAmount;
      }
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
    } else {
      inputString += e.target.innerHTML;
      document.querySelector("input").value = inputString;
    }
  });
});
