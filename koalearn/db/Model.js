var mongoose = require("mongoose");
 

// 模型骨架
var Schema = new mongoose.Schema({
    username: {type: String},
    password: {type: String, default: '123456'},
    time: {type: Date,default: new Date()}
});
 
// 由schema构造生成Model
var Model = mongoose.model('person',Schema,'user');
 
module.exports = Model;
 
