const todoService = require('../services/todo.service');

const {
    check,
    validationResult,
    param
} = require('express-validator');



const validate = (method) => {
    switch (method) {
        case 'createTodo': {
            return [
                check('title', "title is required").exists(),
            ];
        }
        case 'updateTodo': {
            return [
                param('id_todo').exists(),
                check('title', "title is required").exists(),
            ];
        }
    }
};


const c_getAllTodos = async (req, res) => {
    let todos = await todoService.getAllTodos();

    return res.status(200).json({
        data: {
            message: "success",
            todos : todos
        },
        error: "",
    });

};

const c_getTodo = async (req, res) => {
    let todo = await todoService.getTodo(req.params.id_todo);

    if(todo){
        return res.status(200).json({
            data: {
                message: "success",
                todo: todo
            },
            error: "",
        });
    }else{
        return res.status(200).json({
            data: {
                message: "Not Found"
            },
            error: "",
        });
    }


};

const c_createTodo = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                errors: errors.array()
            });
            return;
        }

        const todo = {
            title: req.body.title,
            id_user: 1,
        };

        let createdTodo = await todoService.createTodo(todo);

        return res.status(200).json({
            data: {
                message: "success",
                todo: createdTodo
            },
            error: "",
        });

    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error",
        });
    }

};


const c_updateTodo = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                errors: errors.array()
            });
            return;
        }

        const todo = {
            id_todo: req.params.id_todo,
            title: req.body.title,
            id_user: 1,
        };

        let createdTodo = await todoService.updateTodo(todo);

        return res.status(200).json({
            data: {
                message: "Todo successfully updated",
                todo: createdTodo
            },
            error: "",
        });

    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error",
        });
    }

};

const c_deleteTodo = async (req, res) => {
    try {
        let result = await todoService.deleteTodo(req.params.id_todo);

        if (result == 1) {
            return res.status(200).json({
                message: "Successfully deleted user",
                error: "",
            });
        } else {
            throw new Error("Failed to delete");
        }
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error",
        });
    }


};

module.exports = {
    c_getAllTodos,
    c_getTodo,
    c_createTodo,
    c_updateTodo,
    c_deleteTodo,
    validate
};
