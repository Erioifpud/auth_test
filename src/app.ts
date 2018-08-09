import * as Koa from 'koa'
import router from './service'
import RedisStore from './service/redis'
import * as session from 'koa-session2'
import * as cors from 'kcors'
import * as koaBody from 'koa-bodyparser'

import auth from './auth/middle'
import AuthManager from "./auth/AuthManager"
import CustomRule from './CustomRule'
import { initDataBase } from './data/db'

const app = new Koa()

app.use(cors({credentials: true}))
app.use(session({maxAge: 20 * 60 * 1000, store: new RedisStore()}))
app.use(koaBody())
app.use(auth({
  rule: new CustomRule(),
  permissions: ['/api/login']
}))
app.use(router.routes())
app.use(router.allowedMethods())

initDataBase(app)

console.log('http://localhost:4444/')