const inputDataElement = document.getElementById('item');
const addButtonElement = document.getElementById('add');
// make and eventlistener
addButtonElement.addEventListener('click',function(){
    let item = inputDataElement.value;
    console.log(item);
});