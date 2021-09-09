const userService = require('../services/user.service');
const roleService = require('../services/role.service');
const {
    check,
    validationResult,
    param
} = require('express-validator');



const validate = (method) => {
    switch (method) {
        case 'createUser': {
            return [
                check('fullname', "fullname is required").exists(),
                check('email', 'Invalid email').exists().isEmail(),
                check('password', 'Invalid password').exists().trim().isLength({
                    min: 4,
                    max: 16
                })
                .custom(async (confirm_password, {
                    req
                }) => {
                    const password = req.body.password;
                    if (password !== confirm_password) {
                        throw new Error('Passwords must be same');
                    }
                }),
                check('confirm_password', 'Invalid password').exists().trim().isLength({
                    min: 4,
                    max: 16
                })
                .custom(async (password, {
                    req
                }) => {
                    const confirm_password = req.body.confirm_password;
                    if (password !== confirm_password) {
                        throw new Error('Confirmation passwords must be same');
                    }
                }),
            ];
        }
        case 'updateUser': {
            return [
                param('id_user').exists(),
                check('fullname', "fullname is required").exists(),
                check('password', 'Invalid password').exists().trim().isLength({
                    min: 4,
                    max: 16
                })
                .custom(async (confirm_password, {
                    req
                }) => {
                    const password = req.body.password;
                    if (password !== confirm_password) {
                        throw new Error('Passwords must be same');
                    }
                }),
                check('confirm_password', 'Invalid password').exists().trim().isLength({
                    min: 4,
                    max: 16
                })
                .custom(async (password, {
                    req
                }) => {
                    const confirm_password = req.body.confirm_password;
                    if (password !== confirm_password) {
                        throw new Error('Confirmation passwords must be same');
                    }
                }),
            ];
        }
    }
};


const c_getAllUsers = async (req, res) => {


    let users = await userService.getAllUsers();

    return res.status(200).json({
        data: users,
        error: "",
    });

};

const c_getUser = async (req, res) => {
    let user = await userService.getUser(req.params.id_user);

    return res.status(200).json({
        data: user,
        error: "",
    });

};

const c_createUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                errors: errors.array()
            });
            return;
        }

        const user = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
        };

        let newUser = await userService.createUser(2, user);

        return res.status(200).json({
            data: newUser,
            error: "",
        });

    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error",
        });
    }

};


const c_updateUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                errors: errors.array()
            });
            return;
        }

        const user = {
            id_user: req.params.id_user,
            fullname: req.body.fullname,
            password: req.body.password,
        };

        let updatedUser = await userService.updateUser(user);

        return res.status(200).json({
            data: updatedUser,
            error: "",
        });

    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error",
        });
    }

};

const c_deleteUser = async (req, res) => {
    try {
        let result = await userService.deleteUser(req.params.id_user);

        if(result == 1){
            return res.status(200).json({
                message: "Successfully deleted user",
                error: "",
            });
        }else{
            throw new Error("Failed to delete");
        }
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            error: "Unexpected error",
        });
    }


};

module.exports = {
    c_getAllUsers,
    c_getUser,
    c_createUser,
    c_updateUser,
    c_deleteUser,
    validate
};
