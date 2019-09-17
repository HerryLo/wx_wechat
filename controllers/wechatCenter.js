const sha1 = require('sha1');
const config = require('../config');

function wechatCenter() {
    this.wechat = async (ctx, next) => {
        ctx.body = 12313;
        return;
        let token = config.wechat.token;
        let signature = ctx.query.signature;
        let nonce = ctx.query.nonce;
        let timestamp = ctx.query.timestamp;
        let echostr = ctx.query.echostr;
        let str = [token,timestamp,nonce].sort().join(''); //按字典排序，拼接字符串
        let sha = sha1(str); //加密
        ctx.body = (sha === signature)? echostr + '' : 'failed';  //比较并返回结果
    }
}

module.exports = new wechatCenter()