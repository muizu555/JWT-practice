//configは設定。なのでjwtの設定を書いていく

require("dotenv").config();//ここで秘匿性を上げている


//server.jsで使うのでexportsが必要
module.exports = {
    jwt: {
        secret: process.env.SECRETKEY,//秘密鍵の情報
        options: {
            algorithm: "HS256",//暗号化方式
            expiresIn: "1d",
        },
    },
};