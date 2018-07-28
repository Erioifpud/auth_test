import * as Router from 'koa-router'
import v1 from './v1'

const router = new Router()

v1(router, '/api')

export default router