const express = require("express");
const router = express.Router();

const {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require("../controllers/authController");
// Crear usuario
router.post("/usuarios", crearUsuario);

// Obtener todos los usuarios
router.get("/usuarios", obtenerUsuarios);

// Obtener un usuario por ID
router.get("/usuarios/:id", obtenerUsuario);

// Actualizar usuario
router.put("/usuarios/:id", actualizarUsuario);

// Eliminar usuario
router.delete("/usuarios/:id", eliminarUsuario);
module.exports = router;