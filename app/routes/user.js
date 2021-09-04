const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const userController = require('../controllers/userController');


router.get('/', (req, res) => {
    return res.status(200).json({
        users: [
            {
                id_user: 1,
                fullname: "John Doe",
                email: "johndoe@email.test",
                role: {
                    id_role: 2,
                    role_name: "User"
                },
            },
            {
                id_user: 2,
                fullname: "Jane Doe",
                email: "janedoe@email.test",
                role: {
                    id_role: 2,
                    role_name: "User"
                },
            }
        ]
    });
});

module.exports = router;
