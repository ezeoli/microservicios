const {ClientError} = require('../utils/errors')

module.exports = (req,res,next) => {
    const {title} = req.body;
    if (!title) throw new ClientError('film not found',401);
    next();
}