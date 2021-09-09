const models = require('../db/models/index');

const getAll = () => {
    return models.tb_todolist.findAll();
};

const findByID = (id_todolist) => {
    return models.tb_todolist.findOne({
        where: {
            id_todolist: id_todolist
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
            id_todolist: todolist.id_todolist,
            id_todo: id_todo
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
    getAll,
    findByID,
    create,
    update,
    destroy
}

