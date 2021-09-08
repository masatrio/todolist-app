const express = require('express');
const cors = require('cors');
const router = express.Router();


require('dotenv').config();
const PORT = process.env.PORT;



const app = express();

// implement cors
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to ToDo List App API"
    });
});

// User Routes
const users = require('./routes/user');
app.use('/users', users);

// You guys can try this endpoint to get all roles or role by id
// we will delete this endpoint later
const roleController = require('./controllers/role');

app.get('/roles', roleController.getAllRole);
app.get('/roles/:id_role', roleController.getRole);
// end of status endpoint




// You guys can try this endpoint to get all statuses or status by id
// we will delete this endpoint later
const statusController = require('./controllers/status');

app.get('/statuses', statusController.getAll);
app.get('/statuses/:status_id', statusController.getStatus);
// end of status endpoint


app.listen(
    PORT,
    () => console.log(`App its alive in http://localhost:${PORT}`
));

