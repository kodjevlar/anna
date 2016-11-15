const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// Modules
const responseTime = require('./middleware/response-time');
const greeterModule = require('./modules/greetings');

const server = new Koa();
const router = new Router();
const core = require('./core');

const anna = core.init();

anna.load(greeterModule);

anna.listen(process.env.SLACK_TOKEN, function() {
  console.log('connected to the internet');
});
