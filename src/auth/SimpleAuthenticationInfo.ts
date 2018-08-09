import {AuthenticationInfo} from "./AuthenticationInfo"

export class SimpleAuthenticationInfo extends AuthenticationInfo {
  private _salt: object

  constructor(principal?: string, credential?: string, salt?: string) {
    super()
    this._principals = Object(principal)
    this._credentials = Object(credential)
    this._salt = Object(salt)
  }

  get principals(): object {
    return this._principals
  }

  get credentials(): object {
    return this._credentials
  }

  get salt(): object {
    return this._salt
  }

  set credentials(value: object) {
    this._credentials = value
  }

  set principals(value: object) {
    this._principals = value
  }

  set salt(value: object) {
    this._salt = value
  }
}