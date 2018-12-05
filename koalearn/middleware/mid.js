function mid(ctx){
    global.console.log('my-mid'+ctx.path);

}
module.exports=()=>{
    return async (ctx,next)=>{
        mid(ctx);
        await next();
    }
}