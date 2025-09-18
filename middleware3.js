const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(res.statusCode).json({
        statusCode:err.statusCode,
        status:err.status,
        message:err.message
    })
};
module.exports = errorHandler;
