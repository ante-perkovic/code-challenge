module.exports = function authorization(req, res, next) {
  if (req.headers.authorization !== "xyz0987654321") {
    return res.send(401);
  }

  next();
};
