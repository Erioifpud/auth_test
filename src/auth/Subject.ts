import Token from "./Token"
import AuthManager from "./AuthManager"
import {AuthenticationInfo} from "./AuthenticationInfo"

export default class Subject {
  private authenticated: boolean

  isAuthenticated() {
    return this.authenticated
  }

  isPermitted(permission: string): boolean {
    return true
  }

  hasRole(role: string): boolean {
    return true
  }

  login(ctx: any, token: Token) {
    try {
      let authenticationInfo = AuthManager.authenticationFunc(token)
      ctx.session.auth.authenticationInfo = authenticationInfo
      let authorizationInfo = AuthManager.authorizationFunc(token)
      ctx.session.auth.authorizationInfo = authorizationInfo
    } catch (e) {
      console.log(e)
    }
  }

  logout(ctx: any) {
    ctx.session.auth = null
  }
}