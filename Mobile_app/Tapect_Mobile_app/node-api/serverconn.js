// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');



const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());


app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
