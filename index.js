const toDosStore = ["Shopping", "Home work", "Go to the gym"];

const insertTodo = (newTodo) => toDosStore.push(newTodo);

const createTodos = (todos) => {
    for (let i = 0; i < todos.length; i++){
        insertTodo(todos[i]);
    }
};

const removeTodo = (orderNumber) => toDosStore.splice(orderNumber - 1, 1);

const editTodo = (orderNumber, newValue) => (toDosStore[orderNumber - 1] = newValue);

const updateTodos = (todosOrder, newTodosValus) => {
  
    for (let i = 0; i < newTodosValus.length; i++) {
    console.log(i);
    
    let todoOrder = todosOrder[i];
    toDosStore[todoOrder - 1] = newTodosValus[i];
  }
  console.log(toDosStore);
};
const RenderToDosListTemplate = () => {
    if (toDosStore.length < 1) {
    return "To do list stor is empty";
  } else {
        let template = "ToDo List: " + "\n";
        for (let i = 0; i < toDosStore.length; i++) {
      template = `${template} ${i + 1}- ${toDosStore[i]} \n`;
    }

    return template;
  }
};

insertTodo("clean Kitchen");
insertTodo("prepare the Food");
console.log(toDosStore);

removeTodo(3);
console.log(toDosStore);

editTodo(3, "Pay bills");
console.log(toDosStore);

console.log(RenderToDosListTemplate());




























// console.log(RenderToDosListTemplate())