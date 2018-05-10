require('babel-polyfill');
const Koa = require('koa');
const app = new Koa();


app.use(async(ctx, next) => {
    const start = Date.now();
    console.log('1');
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log('2');
})

app.use(async(ctx, next) => {
    const start = Date.now();
    console.log('3');
    await next();
    const ms = Date.now() - start;
    console.log('4');
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
})



app.use((ctx) => {
    ctx.body = 'Hello World';
    ctx.response.status = 200;
    console.log('我的第一个koa应用');
})

app.listen('3000');