var mongoose = require('./db.js');
 
 
// 模型骨架
var Schema = new mongoose.Schema({
    username: {type: String},
    password: {type: Number, default: 123456},
    time: {type: Date}
});
 
// 由schema构造生成Model
var Model = mongoose.model('user',Schema);
 
module.exports = Model;
 
