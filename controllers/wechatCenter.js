module.exports = {
    async get(ctx, next) {
        await next();
    },
    
    async post(ctx, next) {
        await next();
    }
}