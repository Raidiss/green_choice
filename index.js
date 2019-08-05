const express = require("express");
const api = require('./backend/api');

const app = express();

app.use(express.static('./frontend/build'));

api(app);
