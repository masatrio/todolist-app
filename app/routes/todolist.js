const router = require('express').Router();
const todolistController = require('../controllers/todolist.controller');

router.get('/todos/:id_todo/todolists', todolistController.c_getAllTodolist);
router.get('/todos/:id_todo/todolist/:id_todolist', todolistController.c_getTodolist);
router.post('/todos/:id_todo/todolists', todolistController.c_createTodolist);
router.patch('/todos/:id_todo/todolist/:id_todolist', todolistController.c_updateTodolist);
router.delete('/todos/:id_todo/todolist/:id_todolist', todolistController.c_deleteTodolist);

module.exports = router;