const userRepository = require('../repositories/user.repository');
const roleRepository = require('../repositories/role.repository');

const getAllUsers = async() => {
    return userRepository.getAll();
};

const getUser = async(id_user) => {
    let user = await userRepository.findById(id_user);
    return user;
};

const createUser = async(id_role ,user) => {
    let createdUser = await userRepository.create(id_role ,user);
    createdUser.setDataValue('role', await roleRepository.findById(createdUser.id_role));

    // let role = await roleRepository.findById(createUser.id_role);

    return createdUser;
};

const updateUser = async(user) => {
    let updatedUser = await userRepository.update(user);
    updatedUser.setDataValue('role', await roleRepository.findById(updatedUser.id_role));

    return updatedUser;
};

const deleteUser = async(id_user) => {
    let user = await userRepository.destroy(id_user);

    return user;
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
