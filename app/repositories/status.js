// First we import all models from models/index.js
const models = require('../db/models/index');


// Then we can use models.model_name to access ORM method such as findAll, findOne, etc

// all -> get all statuses
const all = () => {
    return models.tb_status.findAll();
};

// findById -> get statuses by id
const findById = (id) => {
    return models.tb_status.findOne({
        where: {
            id_status: id
        }
    });
};


module.exports = {
    all,
    findById,
};
