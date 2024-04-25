const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const mensaje = req.query.mensaje || "";
  res.send(`
        <h1>Bienvenido</h1>
        <p>Hora actual: ${req.horaActual}</p>
        <form action="/endroute" method="GET">
            <button type="submit"><strong>End Route</strong></button>
        </form>
        <p>${mensaje}</p>
    `);
});

module.exports = router;
