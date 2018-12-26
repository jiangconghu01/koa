var Model = require("./Model.js");
 
// 查询数据
module.exports=(obj)=>{
	return new Promise((resolve,reject)=>{
		Model.find(obj,function(err,res){
			if(err){
				reject(err)
			} else {
				resolve(res)
			}
		})
	})
}

