module.exports = (req, res, next) => {
  console.log(req.method + ' ' + req.originalUrl + ' at ' + new Date());
  next();
};
