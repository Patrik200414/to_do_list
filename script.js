document.querySelector('#todoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let objectDuties = {duties: event.target.elements.input.value, id: uniqueid()};
    Render(objectDuties);
});

function Render(object){
    
    //Creating the todo div
    let divTodo = document.createElement('div');
    divTodo.setAttribute('class', 'todo');
    divTodo.setAttribute('id', object.id);
    //Creating the li
    let liTodo = document.createElement('li');
    //Create the h3
    let h3Todo = document.createElement('h3');
    h3Todo.setAttribute('class', 'dutie');
    h3Todo.innerText = object.duties;
    //Creating the checked button
    let buttonCheck = document.createElement('button');
    buttonCheck.setAttribute('type', 'button');
    buttonCheck.setAttribute('class', 'checked');
    buttonCheck.setAttribute('name', 'checked');
    buttonCheck.innerHTML = '<i class="fas fa-check"></i>';
    //Creating the delete button
    let buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.setAttribute('class', 'delete');
    buttonDelete.setAttribute('name', 'delete');
    buttonDelete.innerHTML = '<i class="fas fa-trash"></i>';
    //Button container
    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'button-container');
    buttonContainer.append(buttonCheck, buttonDelete);
    //Append the elements to the div
    divTodo.append(liTodo, h3Todo, buttonContainer);
    //Append the element to the ul
    document.querySelector('#todoList').appendChild(divTodo);
    inputManipulate();
}


document.querySelector('#todoList').addEventListener('click', (event) => {
    let element = event.target;
    let className = element.classList.value;
    let idName;
    if(element.parentElement.parentElement.id == ''){
        idName = element.parentElement.parentElement.parentElement.id;
    }
    else{
        idName = element.parentElement.parentElement.id;
    }
    if(className == 'fas fa-check' || className == 'checked'){
        document.getElementById(idName).classList.toggle('clickedCheck');
    }
})






function inputManipulate(){
    document.querySelector('#input').classList.add('set-when-submitted-input');
    document.querySelector('#sendTodo').classList.add('set-when-submitted-button');
    setTimeout(() => {
        document.querySelector('#input').classList.remove('set-when-submitted-input');
        document.querySelector('#sendTodo').classList.remove('set-when-submitted-button');
    }, 1000);
    document.querySelector('#input').value = '';
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