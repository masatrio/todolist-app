const models = require('../db/models/index');

const getAllTodoList = (id_todo) => {
    return models.tb_todolist.findAll({
        where: {
            id_todo: id_todo
        }
    });
};

const findById = (id_todolist) => {
    return models.tb_todolist.findOne({
        where: {
            id_todolist: id_todolist
        }
    });
};

const findByIdTodo = (id_todo) => {
    return models.tb_todolist.findOne({
        where: {
            id_todo: id_todo
        }
    });
};

const create = (id_todo, todolist) => {
    return models.tb_todolist.create({
        task: todolist.task,
        id_todo: id_todo
    });
};

const update = (todolist) => {
    return models.tb_todolist.update({
        task: todolist.task
    }, {
        where: {
            id_todolist: todolist.id_todolist
        }
    });
};

const destroy = (id_todolist) => {
    return models.tb_todolist.destroy({
        where: {
            id_todolist: id_todolist
        }
    });
};

module.exports = {
    getAllTodoList,
    findById,
    findByIdTodo,
    create,
    update,
    destroy
}

