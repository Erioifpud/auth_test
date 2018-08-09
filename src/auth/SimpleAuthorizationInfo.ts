import {AuthorizationInfo} from "./AuthorizationInfo"
import Resource from "../data/entity/Resource"
import Role from "../data/entity/Role"

export class SimpleAuthorizationInfo extends AuthorizationInfo {
  constructor(roles?: string[], resources?: string[]) {
    super()
    this._roles = roles
    this._resources = resources
  }

  get resources() {
    return this._resources
  }

  get roles() {
    return this._roles
  }

  addResource(resource: string) {
    this._resources.push(resource)
  }

  addRole(role: string) {
    this._roles.push(role)
  }
}