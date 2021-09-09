const models = require('../db/models/index');

const getAll = () => {
    return models.tb_user.findAll();
};

const findById = async (id_user) => {
    let user = await models.tb_user.findOne({
        where: {
            id_user: id_user
        }
    });

    console.log(user);
    return user;
};

const create = (id_role, user) => {
    return models.tb_user.create({
        fullname: user.fullname,
        email: user.email,
        password: user.password,
        id_role: id_role
    });
};

const update = async(user) => {
    let id = user.id_user;

    return models.tb_user.update({
        fullname: user.fullname,
        password: user.password,
    }, {
        where: {
            id_user: user.id_user
        },
    }).then(() => {
        return models.tb_user.findOne({
            where: {
                id_user: id
            }
        });
    });
};

const destroy = (id_user) => {
    return models.tb_user.destroy({
        where: {
            id_user: id_user
        }
    });
};

module.exports = {
    getAll,
    findById,
    create,
    update,
    destroy
};
