const express = require("express");
const api = require('./api');

const app = express();

api(app);
