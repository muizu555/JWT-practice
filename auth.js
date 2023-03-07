const jwt = require("jsonwebtoken");
const config = require("./config");

function auth(req, res, next) {
    try {
        //承認用のトークン設定
        const token = req.headers.token;//ここはpostmanで設定している

        const decoded = jwt.verify(token, config.jwt.secret);//ここで復号の作業、verifyは関数で有効かどうかを確認している
        console.log(decoded);
        next();//ここのnextがよく分からない
        
    } catch (err) {
        return res.send(401).json({
            msg: "認証できません",
        });
        
    };
};

module.exports = auth;