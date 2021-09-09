const todolistService = require('../services/todolist.service');
const {
    check,
    validationResult,
    param
} = require('express-validator');

const validate = (method) => {
    switch (method) {
        case 'createTodolist': {
            return [
                check('task', 'task is required').exists()
            ];
        }
        case 'updateTodolist': {
            return[
                param('id_todolist').exists(),
                check('task', "task is required").exists()
            ]
        }
    }
}

const c_getAllTodolist = async(req, res) => {
    let todolists = await todolistService.getAllTodolist();
    return res.status(200).json({
        data: todolists,
        error: ""
    });
}
const c_getTodolist = async(req,res) => {
    let todolist = await todolistService.getTodolist(req.params.id_todolist);

    return res.status(200).json({
        data: todolists,
        error: ""
    });
};

const c_createTodolist = async(req, res)=> {
    try {
        const error = validationResult(req);

        if(!errors.isEmpty()) {
            res.status(422).json({
                errors: errors.array()
            })
            return;
        }

        const todolist = {
            task:req.body.task
        };

        let newTodolist = await todolistService.createTodolist(todolist)

        return res.status(200).json({
            data: newTodolist,
            error: ""
        })
    } catch (error){
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error"
        });
    }
};

const c_updateTodolist = async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.status(422).json({
                errors:errors.array()
            })
            return;
        }
        const todolist = {
            task:req.body.task
        };

        let updatedTodolist = await todolistService.updateTodolist(todolist);
        
        return res.status(200).json({
            data: updatedTodolist
        });
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error"
        });
    }
};

const c_deleteTodolist = async (req, res) => {
    try {
        let result = await todolistService.deleteTodolist(req.params.id_todolist);
        
        if(result == 1){
            return res.status(200).json({
                message: "Succesfully deleted todolist",
                error: ""
            });
        } else {
            throw new Error("Failed to delete");
        }
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error"
        });
    }
};

module.exports = {
    c_getAllTodolist,
    c_getTodolist,
    c_createTodolist,
    c_updateTodolist,
    c_deleteTodolist,
    validate
}