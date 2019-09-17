let Koa = require('koa');
let sha1 = require('sha1');

let config = {
    wechat:{
        appID:'wxd10f8cbcf28c61b1', //填写你自己的appID
        appSecret:'7ce0b6983abe6001f2efe4f7c62e6f80',  //填写你自己的appSecret
        token: 'weixin'  //填写你自己的token
    }
};

let app = new Koa();

app.use( async (ctx, next) => {
    let token = config.wechat.token;
    let signature = this.query.signature;
    let nonce = this.query.nonce;
    let timestamp = this.query.timestamp;
    let echostr = this.query.echostr;
    let str = [token,timestamp,nonce].sort().join(''); //按字典排序，拼接字符串
    let sha = sha1(str); //加密
    this.body = (sha === signature)? echostr + '' : 'failed';  //比较并返回结果
});

app.listen(5345, ()=> {
    console.log(`端口号：5345`)
});