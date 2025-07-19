const errorMiddleware = (err, req, res, next) => {
    try {
        let error = {...err};
        error.message
    } catch (error) {
        next(error)
    }
}