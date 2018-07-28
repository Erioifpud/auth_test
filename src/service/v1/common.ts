import * as Router from 'koa-router'
import result from './result'

const router = new Router()

interface User {
  username: string,
  password: string
}

async function login (ctx) {
  let user: User = ctx.request.body
  console.log(user)
  if (user.username === 'root' && user.password === 'root') {
    ctx.session.user = user
    ctx.body = result(0, '登录成功')
  } else {
    ctx.body = result(1, '登录失败')
  }
}

async function logout (ctx) {
  let user = ctx.session.user
  if (user) {
    ctx.session.user = null
    ctx.body = result(0, '注销成功')
  } else {
    ctx.body = result(1, '你还没登录')
  }
}

async function test (ctx) {
  if (ctx.session.user) {
    ctx.body = result(0, '访问成功', {
      message: 'Hello world!'
    })
  } else {
    ctx.body = result(1, '访问失败，你还没登录')
  }
}

export default (router: Router, prefix: string) => {
  router.get(prefix + '/test', test)
  router.post(prefix + '/login', login)
  router.get(prefix + '/logout', logout)
}