import * as Koa from 'koa'
import router from './service'
import RedisStore from './service/redis'
import * as session from 'koa-session2'
import * as cors from 'kcors'
import * as koaBody from 'koa-bodyparser'

const app = new Koa()

app.use(cors({credentials: true}))
app.use(session({maxAge: 20 * 60 * 1000, store: new RedisStore()}))
app.use(koaBody())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4444)

console.log('http://localhost:4444/')