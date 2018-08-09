import BaseEntity from "./BaseEntity"
import {Column, Entity, JoinTable, ManyToMany} from "typeorm"
import Role from "./Role"

@Entity()
export default class User extends BaseEntity {
  @Column()
  public username: string

  @Column()
  public password: string

  @ManyToMany(type => Role)
  @JoinTable({name: "user_roles"})
  public roles: Role[]
}