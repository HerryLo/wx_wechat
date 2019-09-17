const Router = require('koa-router');
const Routers = new Router();

const wechatCenter = require('../controllers/wechatCenter');

// controller/wechatCenter
Routers.get('/wechat', wechatCenter.wechat);

module.exports = Routers