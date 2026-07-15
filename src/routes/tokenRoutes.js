const express = require("express");

const router = express.Router();

const {

    generarToken

} = require("../controllers/tokenController");

router.post("/token", generarToken);

module.exports = router;