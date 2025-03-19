const todoList =[];
function renderTodoList(){
    let todoListHTML = '';
    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        const {name,duedate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${duedate}</div>
        <button onclick= "
            todoList.splice(${i},1);
            renderTodoList();
        ">delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo(){
    let inputnameElement = document.querySelector('.js-input');
    const name = inputnameElement.value;
    let inputdateElememt =document.querySelector('.js-input-date');
    const duedate = inputdateElememt.value;
    todoList.push({name,duedate});
    inputnameElement.value = '';
    inputdateElememt.value = '';

    renderTodoList();
    
}