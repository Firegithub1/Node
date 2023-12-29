/*
 * @Author: YiY
 * @Date: 2023-12-29 11:24:46
 * @LastEditTime: 2023-12-29 11:27:24
 */
function returnBody(ctx, code, msg, data = {}) {
  ctx.response.status = code
  ctx.body = {code,msg,data}
  return ctx
}

let ctxObj = {
  response:{ status: 22 },
  body:{
    code: 2,
    msg: '241',
    data: {
      a: 1,
      b: 2,
    }
  }
}

console.log(returnBody(ctxObj,300,'fsff',{fs:"fsjf",t:111}))