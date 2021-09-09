const models = require('../db/models/index');

const getAll = () => {
    return models.tb_todo.findAll();
};

const findById = (id_todo) => {
    return models.tb_todo.findOne({
        where: {
            id_todo: id_todo
        }
    });
};

const create = (todo) => {
    return models.tb_todo.create({
        title: todo.title,
        id_user: todo.id_user,
    });
};

const update = (todo) => {
    let id = todo.id_todo;

    return models.tb_todo.update({
        title: todo.title
    }, {
        where: {
            id_todo: todo.id_todo
        }
    }).then(() => {
        return models.tb_todo.findOne({
            where: {
                id_todo: id
            }
        });
    });
};

const destroy = (id_todo) => {
    return models.tb_todo.destroy({
        where: {
            id_todo: id_todo
        }
    });
};

module.exports = {
    getAll,
    findById,
    create,
    update,
    destroy
}
