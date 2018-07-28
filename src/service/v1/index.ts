import * as Router from 'koa-router'

export default (router: Router, prefix: string) => {
  require('./common').default(router, prefix)
}