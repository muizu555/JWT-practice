const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config");
const auth = require("./auth");

const app = express();
const PORT = 3000;


app.use(express.json());
app.listen(PORT, console.log("server running"));


//登録
app.post("/register", (req, res) => {
    const payload = {//登録情報
        username: req.body.username,
        email: req.body.email,
    };

    const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);//ここでtokenを発行している payloadの中身を暗号化している！！


    const body = {//postmanで使うため
        username: req.body.username,
        email: req.body.email,
        token: token,
    };

    res.status(200).json(body);//ここで実際に返している！！
});

//ログイン
app.get("/login", auth, (req, res) => {//ログインの時にtokenを持ってるか知りたいので第二引数にauthを入れている
    res.status(200).json({//ここはnext();によって動くらしい
        msg: "承認に成功しました"
    })
})
