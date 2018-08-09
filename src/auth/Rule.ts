import Token from "./Token"

export default abstract class Rule {
  abstract async authorization(token: Token)

  abstract async authentication(token: Token)
}