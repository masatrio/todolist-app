const roleService = require('../services/role')

const getAllRole = async(req, res) =>{
    let roles = await roleService.allRoles();

    return res.status(200).json({
        roles
    });

};

// getStatus will return 1 status by id
const getRole = async(req, res) =>{
    let id = req.params.id_role;
    let role = await roleService.role(id);

    return res.status(200).json({
        role: role
    });

};

module.exports = {
    getAllRole,
    getRole
};