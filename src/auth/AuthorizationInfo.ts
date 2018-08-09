import Resource from "../data/entity/Resource"
import Role from "../data/entity/Role"

export abstract class AuthorizationInfo {
  protected _roles: string[]
  protected _resources: string[]
}