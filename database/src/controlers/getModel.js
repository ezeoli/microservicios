const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model }  = req.params;
  const resModel = await store[model].list();