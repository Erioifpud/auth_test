import Rule from "../Rule"
import AuthManager from "../AuthManager"

interface Options {
  rule: Rule
  permissions: string[]
}

export default (opts: Options) => {
  AuthManager.authenticationFunc = opts.rule.authentication
  AuthManager.authorizationFunc = opts.rule.authorization
  return async function (ctx, next) {
    if (!ctx.session.auth) {
      if (!opts.permissions.includes(ctx.url)) {
        ctx.throw(401)
      } else {
        await next()
      }
    } else if (ctx.session.auth.authorization) {
      console.log(ctx.session.auth.authorization)
      let resources = ctx.session.auth.authorization._resources.concat(opts.permissions)
      if (!resources.includes(ctx.url)) {
        ctx.throw(401)
      } else {
        await next()
      }
    }
  }
}