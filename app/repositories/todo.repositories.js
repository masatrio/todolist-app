const models = require('../db/models/index');

const getAll = () => {
    return models.tb_todo.findAll();
};

const findByID = (id_todo) => {
    return models.tb_role.findOne({
        where: {
            id_todo: id_todo
        }
    });
};

const create = (id_user, todo) => {
    return models.tb_role.create({
        title: todo.title,
        id_user: id_user
    });
};

const update = (todo) => {
    return models.tb_todo.update({
        title: todo.title
    }, {
        where: {
            id_todo: todo.id_todo
        }
    });
};

const destroy = (todo) => {
    return models.tb_todo.destroy({
        where: {
            id_todo: id_todo
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