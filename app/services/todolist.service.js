const todolistRepository = require('../repositories/todolist.repositories')
const todoRepository = require('../repositories/todo.repository')

const getAllTodolist = async() => {
    return todolistRepository.getAll();
};

const getTodolist = async(id_todolist) => {
    return todolistRepository.findByID(id_todolist)
};

const createTodolist = async(todolist) => {
    let createdTodo = await todolistRepository.create(todolist);
    return createdTodo;
};

const updateTodolist = async(todolist) => {
    let updatedTodolists = await todolistRepository.update(todolist);
    updatedTodolists.setDataValue('todolist', await todolistRepository.findById(updateTodolist.id_todolist));
    return updatedTodo;
};

const deleteTodolist = async(id_todolist) => {
    let todolist = await todolistRepository.destroy(id_todolist);
    
    return todolist;
}

module.exports = {
    getAllTodolist,
    getTodolist,
    createTodolist,
    updateTodolist,
    deleteTodolist
};