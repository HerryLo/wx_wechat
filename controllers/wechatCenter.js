export default {
    async get(ctx, next) {
        await next();
    }
}