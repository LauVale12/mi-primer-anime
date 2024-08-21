const repuesta = require('./repuesta');

function errors(err, req, res, next) {
    console.error('[error]',err);
    const message= err.message||'error interno';
    const status= err.statusCode || 500;
    repuesta.error(req,res,message,status)
}
 module.exports= errors;