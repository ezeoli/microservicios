const {ClientError} = require('../utils/errors')

module.exports = (req,res,next) => {
    const {name} = req.body;    
    if (!name) throw new ClientError('Planet name is missing', 401);
    next();
}