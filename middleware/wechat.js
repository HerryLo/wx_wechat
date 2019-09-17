const wechat = require('co-wechat');
const config = require('../config');

module.exports = wechat(config.wechat).middleware(
    async (message, ctx) => {
        let array = [
            {
                type: 'text',
                content: '~hi!!谢谢关注Yopai的公众号，每周不定期更新，技术博客：https://didiheng.com/，当然这里不光有技术分享，还有其他哟。'
            },
            [
                {
                title: '欢迎交流哦！！😁😁',
                description: '',
                picurl: 'https://didiheng.com/WechatIMG199.jpeg',
                url: ''
            }]
        ]
        let index = Math.round(Math.random())
        return array[index];
    }
) 