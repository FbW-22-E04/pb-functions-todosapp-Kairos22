const toDosStore = ["Shopping", "Home work", "Go to the gym"];

const insertTodo = (newTodo) => toDosStore.push(newTodo);

const createTodos = (todos) => {
    for (let i = 0; i < todos.length; i++){
        insertTodo(todos[i]);
    }
};

const removeTodo = (orderNumber) => toDosStore.splice(orderNumber - 1, 1);

const editTodo = (orderNumber, newValue) => (toDosStore[orderNumber - 1] = newValue);









insertTodo("clean Kitchen");
insertTodo("prepare the Food");
console.log(toDosStore);

removeTodo(3);
console.log(toDosStore);

editTodo(3, "Pay bills");
console.log(toDosStore);





























// console.log(RenderToDosListTemplate())