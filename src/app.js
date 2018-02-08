
// const session = require('koa-session');
// const Router = require('koa-router');
const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(async function (ctx) {
  await ctx.render('user');
});


app.listen(3000);