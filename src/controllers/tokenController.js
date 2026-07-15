const jwt = require("jsonwebtoken");

const generarToken = (req, res) => {

    const { appId, appSecret } = req.body;
console.log("Body:", req.body);

console.log("APP_ID:", process.env.APP_ID);
console.log("APP_SECRET:", process.env.APP_SECRET);
console.log("appId recibido:", appId);
console.log("appSecret recibido:", appSecret);
    if (
        appId !== process.env.APP_ID ||
        appSecret !== process.env.APP_SECRET
    ) {

        return res.status(401).json({
            mensaje: "Credenciales inválidas"
        });

    }

    const token = jwt.sign(

        {
            app: appId,
            tipo: "application"
        },

        process.env.JWT_SECRET,

        {
            expiresIn: "1h"
        }

    );

    res.json({

        mensaje: "Token generado correctamente",

        token

    });

};

module.exports = {

    generarToken

};