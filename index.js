const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api/users",require("./routes/users-routes"));

app.listen(port,() =>
console.log(`Servidor iniciado em http://localhost:${port}`));
