const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const bodyParser = require('body-parser')
const router = require('./route/api/posts')
// Initialise express into an app
const app = express();

// Middlewares 
app.use(cors());
app.use(bodyParser.json());

// direct routes to the router
app.use('/api/posts', router)
// Create PORT
const port = process.env.PORT || 5000;

// Start Server
app.listen(port, () => console.log(`server running on port ${port}`))