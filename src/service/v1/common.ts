import * as Router from 'koa-router'
import result from './result'
import AuthManager from "../../auth/AuthManager"
import {NamePassToken} from "../../auth/NamePassToken"

const router = new Router()

interface User {
  username: string,
  password: string
}

async function login(ctx) {
  let authenticationFunc = AuthManager.authenticationFunc
  let authorizationFunc = AuthManager.authorizationFunc
  let user: User = ctx.request.body
  let token: NamePassToken = new NamePassToken(user.username, user.password)
  try {
    let authentication = await authenticationFunc(token)
    let authorization = await authorizationFunc(token)
    console.log(authentication)
    console.log(authorization)
    let auth = {
      authorization,
      authentication
    }
    ctx.session.auth = auth
    ctx.body = result(0, '登录成功')
  } catch (e) {
    ctx.body = result(1, '登录失败')
  }
}

async function logout(ctx) {
  ctx.session.auth = null
  ctx.body = result(0, '注销成功')
}

async function test(ctx) {
  ctx.body = result(0, '访问成功', {
    message: 'Hello world!'
  })
}

export default (router: Router, prefix: string) => {
  router.get(prefix + '/test', test)
  router.post(prefix + '/login', login)
  router.get(prefix + '/logout', logout)
}