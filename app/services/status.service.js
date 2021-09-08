const statusRepository = require('../repositories/status.repository');

const getAllStatuses = async() => {
    return statusRepository.getAll();
};

const getStatus = async(id) => {
    let statusData = await statusRepository.findById(id);
    return statusData.name;
};

module.exports = {
    getAllStatuses,
    getStatus
};
