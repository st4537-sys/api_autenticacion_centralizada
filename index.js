require("dotenv").config();

const express = require("express");
const conectarDB = require("./src/config/database");

const authRoutes = require("./src/routes/authRoutes");

const verificarToken = require("./src/middleware/verificarToken");

conectarDB();

const app = express();
const port = process.env.PORT || 5100;

app.use(express.json());


// Todo lo que esté después requiere token
app.use(verificarToken);

// Rutas protegidas
app.use("/api", authRoutes);

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});