const Router = require('koa-router');
const router = new Router();

const Routers = require('./router');

export default (app) => {
    router.use('/api', Routers.routes(), Routers.allowedMethods())

    /* 路由注册 */
    return app.use(router.routes()).use(router.allowedMethods())
}