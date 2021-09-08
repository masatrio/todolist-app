const roleRepository = require('../repositories/role')

const getAllRoles = async() => {
    return roleRepository.getAll();
}

const getRoleById = async(id) => {
    return roleRepository.findById(id);
}

module.exports = {
    getAllRoles,
    getRoleById
}