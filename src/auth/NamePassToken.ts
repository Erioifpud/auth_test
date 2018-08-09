import Token from "./Token"

export class NamePassToken extends Token{
  get username() {
    return super.principal
  }

  get password() {
    return super.credential
  }

  set username(newVal: string) {
    super.principal = newVal
  }

  set password(newVal: string) {
    super.credential = newVal
  }
}