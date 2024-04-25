const horaMiddleware = require("./horaMiddleware");

const validarHoraMid = (req, res, next) => {
  const hora = req.horaActual;
  if (hora >= 12 && hora < 24) {
    res.redirect("/endroute");
  } else {
    //res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar en End Route`;
    res.redirect(
      "/?mensaje=Aún no es la hora, espera hasta las 12:00 para entrar en End Route"
      /*+ encodeURIComponent(res.locals.mensaje)*/
    );
  }
};

module.exports = validarHoraMid;
