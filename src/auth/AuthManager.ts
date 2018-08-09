import Subject from "./Subject"
import Token from "./Token"

interface authFunc {
  (token: Token): void
}

export default class AuthManager {
  // static instance: AuthManager
  subject: Subject
  static authorizationFunc: authFunc
  static authenticationFunc: authFunc

  // private constructor() {}
  //
  // static getInstance(): AuthManager {
  //   if (!this.instance) {
  //     this.instance = new AuthManager()
  //   }
  //   return this.instance
  // }
}