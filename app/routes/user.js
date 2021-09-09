const router = require('express').Router();
const userController = require('../controllers/user.controller');


router.get('/', userController.c_getAllUsers);
router.get('/:id_user', userController.c_getUser);
router.post('/', userController.validate('createUser'), userController.c_createUser);
router.put('/:id_user', userController.validate('updateUser'), userController.c_updateUser);
router.delete('/:id_user', userController.c_deleteUser);


module.exports = router;
