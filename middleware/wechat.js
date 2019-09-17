const wechat = require('co-wechat');
const config = require('../config');

module.exports = wechat(config.wechat).middleware(
    async (message, ctx) => {
        return 'Hello world!';
    }
) 