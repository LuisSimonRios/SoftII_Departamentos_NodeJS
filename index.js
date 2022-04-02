const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const routerApi = require('./src/routes/index')

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Listen port', PORT));
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("Succes connection with mongo"))
    .catch(() => console.error("Connection could not be established"));

routerApi(app);
