const express = require("express");
const router = express.Router();

router.get("/endroute", (req, res) => {
  res.send(`
        <h1>EndRoute</h1>
        <p>Ahora estás en EndRoute cuya ruta es:${req.originalUrl} </p>
        <a href="/">Volver al inicio</a> 
    `);
});

module.exports = router;
