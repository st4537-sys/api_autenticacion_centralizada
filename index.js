require('dotenv').config();
const express = require('express');
const conectarDB = require("./src/config/database");
const authRoutes = require("./src/routes/authRoutes");
const tokenRoutes = require("./src/routes/tokenRoutes");

conectarDB();

const app = express();
const port = 5100;

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", tokenRoutes);
app.use("/api", authRoutes);

app.listen(port, () => {
    console.log("Servidor ejecutándose");
});



