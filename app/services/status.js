// First we need to import status repository
const statusRepository = require('../repositories/status');


// Then we can create function to handle or manipulate data that later will be sent to controller
// will get all statuses
const allStatuses = async() => {
    return statusRepository.all();
};

// will call statusrepository with id as param and return status name only
const status = async(id) => {
    return  statusRepository.findById(id).name;
};

module.exports = {
    allStatuses,
    status
};
