const config = require('../config');
const wechat = require('co-wechat');

function wechatCenter() {
    this.wechat = async (ctx, next) => {
        wechat(config).middleware(async (message, ctx) => {
            if (message.FromUserName === '1') {
                return 'hehe';
            }
        })
    }
}

module.exports = new wechatCenter()