const express = require("express");
const router = express.Router();
const verificarToken = require("../middleware/verificarToken");

const {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require("../controllers/authController");
router.post(
    "/usuarios",
    verificarToken,
    crearUsuario
);

router.get(
    "/usuarios",
    verificarToken,
    obtenerUsuarios
);

router.get(
    "/usuarios/:id",
    verificarToken,
    obtenerUsuario
);

router.put(
    "/usuarios/:id",
    verificarToken,
    actualizarUsuario
);

router.delete(
    "/usuarios/:id",
    verificarToken,
    eliminarUsuario
);
module.exports = router;