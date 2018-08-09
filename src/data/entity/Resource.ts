import BaseEntity from "./BaseEntity"
import {Column, Entity} from "typeorm"

@Entity()
export default class Resource extends BaseEntity {
  @Column()
  public name: string

  @Column()
  public rule: string
}