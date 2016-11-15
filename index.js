'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const responseTime = require('./middleware/response-time');
const initSlack = require('./services/slack');

const anna = new Koa();
const router = new Router();

// Services
initSlack();

// Middleware
anna.use(koaBody());
anna.use(responseTime);


// Routes
router.get('/', async function loader(ctx, next) {
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.stringify({
    message: `I'm alive!`
  });
});

anna.use(router.routes());

anna.listen(3001, function() {
  console.log(`Anna says: I'm alive!`);
});
