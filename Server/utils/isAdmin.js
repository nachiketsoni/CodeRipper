exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return next(
            new ErrorResponse(`User ${req.user._id} is not authorized to access this route`, 403)
        );
    }
    next();
}