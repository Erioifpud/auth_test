import {getManager} from "typeorm"
import Role from "../entity/Role"

export const RoleDao = {
  getResourcesByRole: async (role: Role) => {
    const entityManager = getManager()
    let fullRole = await entityManager.createQueryBuilder(Role, 'role')
      .leftJoinAndSelect('role.resources', 'resource')
      .where('role.id = :id', {id: role.id})
      .getOne()
    return fullRole.resources
  }
}