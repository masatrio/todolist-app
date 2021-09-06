// Dummy User Controller
const { getAll } = require('../repositories/user');

const getAllUsers = async(req, res) =>{
    let allUsers = await getAll();

    return res.status(200).json({
        allUsers
    });

};

module.exports = {
    getAllUsers
};
