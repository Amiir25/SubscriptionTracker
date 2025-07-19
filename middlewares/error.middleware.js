const errorMiddleware = (err, req, res, next) => { // err: the information that happens before the response. next: that happens after the request when it is ready to proceed to the next step.
    try {
        let error = {...err};
        error.message = err.message;
        console.log(err);

        // Monggose bad ObjectId
        if (err.name === 'CastError') {
            const message = 'Resource not found';
            error = new Error(message);
            error.statusCode = 404;
        }

        // Mongoose duplicate key
        if (err.code === 11000) {
            const message = 'Duplicate field value entered';
            error = new Error(message);
            error.statusCode = 400;
        }

        // Mongoose validation error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message.join(', '));
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500).json({seccess: false, error: error.message || 'Server Error'});

    } catch (error) {
        next(error);
    }
}

export default errorMiddleware;