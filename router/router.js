const Router = require('koa-router');
const Routers = new Router();

const wechatCenter = require('../controllers/wechatCenter');

// controller/wechatCenter
Routers.get('/wechat', wechatCenter.get);

Routers.post('/wechat', wechatCenter.post);

module.exports = Routers