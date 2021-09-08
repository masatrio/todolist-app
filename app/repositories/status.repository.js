const models = require('../db/models/index');

const getAll = () => {
    return models.tb_status.findAll();
};

const findById = (id) => {
    return models.tb_status.findOne({
        where: {
            id_status: id
        }
    });
};


module.exports = {
    getAll,
    findById,
};
