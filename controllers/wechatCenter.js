module.exports = {
    async get(ctx, next) {
        await next();
    }
}