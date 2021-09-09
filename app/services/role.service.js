const roleRepository = require('../repositories/role.repository');

const getAllRoles = async() => {
    return roleRepository.getAll();
};

const getRole = async(id) => {
    return roleRepository.findById(id);
};

module.exports = {
    getAllRoles,
    getRole
};
