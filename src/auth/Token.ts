export default abstract class Token {
  private _principal: string
  private _credential: string

  constructor(principal:string, credential: string) {
    this._principal = principal
    this._credential = credential
  }

  get principal(): string {
    return this._principal
  }

  set principal(value: string) {
    this._principal = value
  }

  get credential(): string {
    return this._credential
  }

  set credential(value: string) {
    this._credential = value
  }
}