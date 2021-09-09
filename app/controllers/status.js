// First we import status service
const statusService = require('../services/status.service');


// Then we can create function to handle request validation & response
// getAll will return all statuses from database
const getAll = async(req, res) =>{
    let statuses = await statusService.allStatuses();

    return res.status(200).json({
        statuses
    });

};

// getStatus will return 1 status by id
const getStatus = async(req, res) =>{
    let id = req.params.status_id;
    let status = await statusService.status(id);

    return res.status(200).json({
        status: status
    });

};

module.exports = {
    getAll,
    getStatus,
};
