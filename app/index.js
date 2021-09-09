const express = require('express');
const cors = require('cors');


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

//Todolist Routes
const todolist = require('./routes/todolist');
app.use('/', todolist);

app.listen(
    PORT,
    () => console.log(`App its alive in http://localhost:${PORT}`
));

