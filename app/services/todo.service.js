const todoRepository = require('../repositories/todo.repository');
const todoListRepository = require('../repositories/todolist');

const getAllTodos = async() => {
    return todoRepository.getAll();
};

const getTodo = async(id_todo) => {
    let todo = await todoRepository.findById(id_todo);

    if(todo){
        let todolists = await todoListRepository.getAllTodoList(todo.id_todo);
        todo.setDataValue("todolist", todolists);

    }

    return todo;
};

const createTodo = async(todo) => {
    let createdTodo = await todoRepository.create(todo);
    // createdTodo.setDataValue('status', await statusRepository.findById(createdTodo.id_status));

    return createdTodo;
};

const updateTodo = async(todo) => {
    let createdTodo = await todoRepository.update(todo);
    // updatedTodo.setDataValue('todolist', await todoListRepository.findById(createdTodo.id_status));

    return createdTodo;
};

const deleteTodo = async(id_todo) => {
    await todoListRepository.getAllTodoList(id_todo).then((todolists) => {
        todoListRepository.destroy({
            where: {
                id_todo: todolists.map((todolist) => {
                    return todolists.id;
                })
            }
        });
    });

    let todo = await todoRepository.destroy(id_todo);

    return todo;
};

module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
};
