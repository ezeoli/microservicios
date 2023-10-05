const { ClientError } = require("../utils/errors")
module.exports = (req, res, next) => {
  const { model } = req.params;