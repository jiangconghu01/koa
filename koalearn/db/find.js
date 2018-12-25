var Model = require("./Model.js");
 
// 查询数据
Model.find({username: 'jsrenyu'},function(err,res){
	if(err){
		console.log(err);
	} else {
		console.log(res);
	}
})
