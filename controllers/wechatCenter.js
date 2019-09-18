const API = require('wechat-api');
const config = require('../config');

/**
 * 微信公共平台Node库API
 */
const api = new API(config.wechat.appid, config.wechat.appsecret);

global.api = api

module.exports = {
    async get(ctx, next) {
        await next();
    },
    
    async post(ctx, next) {
        await next();
    },

    /**
     * 获取自定义菜单配置 ，目前未认证订阅号不支持
     * @param {*} ctx 
     * @param {*} next 
     */
    async getMenu(ctx, next) {
        global.api.getMenu((err, result)=> {
            console.log(err, result);
        });
    }
}