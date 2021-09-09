const router = require('express').Router();
const todoController = require('../controllers/todo.controller');


router.get('/', todoController.c_getAllTodos);
router.get('/:id_todo', todoController.c_getTodo);
router.post('/', todoController.validate('createTodo'), todoController.c_createTodo);
router.put('/:id_todo', todoController.validate('updateTodo'), todoController.c_updateTodo);
router.delete('/:id_todo', todoController.c_deleteTodo);

module.exports = router;
