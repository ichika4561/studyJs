const Koa = require('koa');
const Router =require('koa-router');
const dayjs = require('dayjs');

const app = new Koa();
const app = new Router();


router
  .get('/', (ctx, next) => {
   ctx.body = 'Current time is:';
  })

app.use(router.routes())
   .use(router.allowedMethods());
   .listen(4444);