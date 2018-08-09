import User from "../entity/User"
import {getManager} from "typeorm"
import Role from "../entity/Role"

export const UserDao = {
  getUserByName: async (name: string) => {
    const entityManager = getManager()
    return entityManager.findOne(User, { username: name })
  },
  getRolesByUser: async (user: User) => {
    const entityManager = getManager()
    let fullUser = await entityManager.createQueryBuilder(User, 'user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('user.id = :id', {id: user.id})
      .getOne()
    return fullUser.roles
  }
}