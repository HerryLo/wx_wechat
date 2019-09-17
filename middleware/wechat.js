const wechat = require('co-wechat');

export default wechat(config.wechat).middleware(
    async (message, ctx) => {
        return 'Hello world!';
    }
) 