const models = require('../db/models/index')

const getAll = () => {
    return models.tb_role.findAll();
};

// findById -> get statuses by id
const findById = (id) => {
    return models.tb_role.findOne({
        where: {
            id_role: id
        }
    });
};


module.exports = {
    getAll,
    findById,
};
