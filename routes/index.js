let express = require('express');
let router = express.Router();

//APIのレスポンスとして返すjsonファイルを読み込む
let test1 = require('../data/test.json')

//GETリクエストを受け付ける
//router.メソッド('パス',function(req,res){処理内容})
router.get('/',function(req,res){
    res.json(test1);
});

//このファイルをモジュールとして他のファイルが使えるように
module.exports = router;
