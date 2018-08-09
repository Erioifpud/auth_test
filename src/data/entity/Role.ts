import BaseEntity from "./BaseEntity"
import {Column, Entity, JoinTable, ManyToMany} from "typeorm"
import Resource from "./Resource"

@Entity()
export default class Role extends BaseEntity {
  @Column()
  public name: string

  @ManyToMany(type => Resource)
  @JoinTable({name: "role_resources"})
  public resources: Resource[]
}