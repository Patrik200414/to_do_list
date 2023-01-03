let todos = [];

document.querySelector('#todoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let objectDuties = {duties: event.target.elements.input.value, id: uniqueid()};
    todos.push(objectDuties);
    Render(todos);
});


function Render(array){
    let string = '';
    for(let item of array){
        string += `
        <li id="${item.id}">
            <div class="todo-element-container">
                <h3>${item.duties}</h3>
                <button></button>
                <button></button>
            </div>
        </li>`
    }
    document.querySelector('#todoList').innerHTML = string;
}


function uniqueid(){
    // always start with a letter (for DOM friendlyness)
    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {                
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        var ascicode=Math.floor((Math.random()*42)+48);
        if (ascicode<58 || ascicode>64){
            // exclude all chars between : (58) and @ (64)
            idstr+=String.fromCharCode(ascicode);    
        }                
    } while (idstr.length<32);

    return (idstr);
}