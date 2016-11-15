async function responseTime(ctx, next) {
  const start = new Date;
  await next();

  const ms = new Date - start;
  ctx.set('X-Anna-Reponse-Time', `${ms}ms`);
}

module.exports = responseTime;
