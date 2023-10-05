const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model, id }  = req.params;
  const resModel = await store[model].get(id);