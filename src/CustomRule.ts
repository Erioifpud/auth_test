import Rule from "./auth/Rule"
import Token from "./auth/Token"
import {NamePassToken} from "./auth/NamePassToken"
import {UserDao} from "./data/dao/UserDao"
import {SimpleAuthenticationInfo} from "./auth/SimpleAuthenticationInfo"
import {getManager} from "typeorm"
import {RoleDao} from "./data/dao/RoleDao"
import Role from "./data/entity/Role"
import {SimpleAuthorizationInfo} from "./auth/SimpleAuthorizationInfo"

export default class CustomRule extends Rule{
  async authentication(token: Token) {
    let namePassToken = <NamePassToken>token
    let user = await UserDao.getUserByName(namePassToken.username)
    if (user.password === namePassToken.password) {
      return new SimpleAuthenticationInfo(user.username, user.password)
    } else {
      throw Error('authentication fail')
    }
  }

  async authorization(token: Token) {
    let namePassToken = <NamePassToken>token
    let newResources = []
    let newRoles = []
    let user = await UserDao.getUserByName(namePassToken.username)
    let roles = await UserDao.getRolesByUser(user)
    for (const role of roles) {
      newRoles.push(role.name)
      const resources = await RoleDao.getResourcesByRole(role)
      for (const resource of resources) {
        newResources.push(resource.rule)
      }
    }
    return new SimpleAuthorizationInfo(newRoles, newResources)
  }

}