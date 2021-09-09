const roleService = require('../services/role.services')

const c_getAllRole = async(req, res) =>{
    let roles = await roleService.getAllRoles();

    return res.status(200).json({
        roles
    });

};

// getStatus will return 1 status by id
const c_getRole = async(req, res) =>{
    let id = req.params.id_role;
    let role = await roleService.getRole(id);

    return res.status(200).json({
        role: role
    });

};

module.exports = {
    c_getAllRole,
    c_getRole
};