const roleRepository = require('../repositories/role')

const allRoles = async() => {
    return roleRepository.getAll();
}

const role = async(id) => {
    return roleRepository.findById(id);
}

module.exports = {
    allRoles,
    role
}