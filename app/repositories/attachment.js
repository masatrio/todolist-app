// First we import all models from models/index.js
const models = require('../db/models/index');


const all = () => {
    return models.tb_attachment.findAll();
};

const findById = (id_attachment) => {
    return models.tb_attachment.findOne({
        where: {
            id_attachment: id_attachment
        }
    });
};

const create = (id_todolist, attachment) => {
    return models.tb_attachment.create({
        url: attachment.url,
        caption: attachment.caption,
        id_todolist: id_todolist,
    });
};

const update = (attachment) => {
    return models.tb_attachment.update({
        caption: attachment.caption,
    }, {
        where: {
            id_attachment: attachment.id_attachment
        }
    });
};

const destroy = (id_attachment) => {
    return models.tb_attachment.destroy({
        where: {
            id_attachment: id_attachment
        }
    });
};

module.exports = {
    all,
    findById,
    create,
    update,
    destroy,
};
