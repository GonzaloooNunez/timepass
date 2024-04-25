//Contiene el código principal de la aplicación con la configuración de Express, middleware y rutas.
const express = require("express");
const horaMiddleware = require("./middlewares/horaMiddleware");
const validarHoraMid = require("./middlewares/validarHora");
const indexRouter = require("./routes/index");
const endroute = require("./routes/endroute");

const app = express();

app.use(horaMiddleware);

app.use("/", indexRouter);
app.use("/endroute", validarHoraMid);

app.listen(3000, () => {
  console.log(`Server  is running on port 3000`);
});
