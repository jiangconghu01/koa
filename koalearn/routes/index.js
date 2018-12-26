const router = require('koa-router')()
const insert = require('../db/insert.js');
const queryuser = require('../db/find.js')
const Model = require("../db/Model.js");
router.get('/', async (ctx, next) => {
  global.console.log('this is index request');
  ctx.cookies.set('username','jiangconghu')
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookie:ctx.cookies.get('username')
  }
})
router.post('/setuser',async(ctx,next)=>{
  const user={
      username: ctx.request.body.usr,
      password: ctx.request.body.pas
  }
  console.log(user)
  const re = await insert(user);
  ctx.body = {
    code:re
  };
})
router.get('/getuser',async(ctx,next)=>{
  console.log(ctx.query.usr)
  const obj={username:ctx.query.usr}
  const user = await queryuser(obj);
  console.log(user)
  ctx.body={
    res:user
  };

})
router.post('/updateuser',async(ctx)=>{
  let str = 'failed';
  const user = await Model.findOne({
    username: ctx.request.body.usr
  });
  console.log(user)
  if(user){
    const re = await Model.where({
      username: ctx.request.body.usr
    }).update({
      password: ctx.request.body.pas
    })
    console.log(re)
    str='sucess'
  }
  ctx.body={
    res:str
  }
})
router.get('/test',async(ctx,next)=>{
  global.console.log('test',new Date().getTime());
  const a=await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('aaaaaaaa');
    },1000)
  })
  const b=123456;
  const c=await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('ccccc');
    },1000)
  })
  ctx.body={
    a,
    b,
    c
  }
})
module.exports = router
