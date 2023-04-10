// here we will use ternary operators over if else statement in js
let age = 11;
let name = "unknown";
if(age > 10){
 name = "Jatin";
}
else{
  name = "Pedro";
}
console.log(name);

// using ternary operator
let newAge = 5;
let newName = newAge > 10 ? "Jatin" : "Pedro";
console.log(newName);

// take an example of react
const Component = () =>{
    return 
            age > 10 ? <h1>Jatin is here</h1> : <h1>Pedro is here</h1>
;
}