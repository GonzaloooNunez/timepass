const horaMiddleware = (req, res, next) => {
  const now = new Date();
  const hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const horaActual = `${hours}:${minutes}`;
  req.horaActual = horaActual;
  next();
};

module.exports = horaMiddleware;
