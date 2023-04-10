// this is a normal function
function DoSomething()
{
    console.log("DoSomething");
}

// this is an arrow function
const DoSomethingElse = () =>{
    console.log("DoSomething Else");
}
DoSomethingElse();

// anoynamous function below code is for react(the function which has no name in inside the onClick function is an anoynamous function which will be automatically called when the button is clicked.)
<button onClick={() =>{
    console.log("clicked");
}}>
    click ME
</button>
