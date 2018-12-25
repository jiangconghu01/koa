var Model = require("./Model.js");
 
// 插入数据
/***/
const insertObj = ()=>{
    return new Promise((resolve,reject)=>{
        Model.create([
            {
                username: 'jason1',
                password: 123456
            },
            {
                username: 'zhaoerya1',
                password: 654321
            }
        ],function(err,doc){
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
