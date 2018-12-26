var Model = require("./Model.js");
 
// 插入数据
/***/
const insertObj = (obj)=>{
    return new Promise((resolve,reject)=>{
        Model.create([obj],function(err,doc){
            if(err){

                console.error(err);
                reject(err)
            } else {
                console.log(["SUCCESS"]);
                resolve(doc)
            }
        })
    })
}
module.exports = insertObj;
