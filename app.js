const Koa = require('koa');
const Json = require('koa-json');
const koaBody = require('koa-body');

const Routers = require('./router');
const config = require('./config');

const App = new Koa();

App.use(Json());
App.use(koaBody({
    multipart: true
}));

/** 路由配置 */
Routers(App);

App.listen(config.port, async () => {
    console.log(`Node Server Open: localhost:${config.port}`);
})