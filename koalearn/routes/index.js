const router = require('koa-router')()

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
