import {PrimaryGeneratedColumn} from "typeorm"

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  constructor(id?: number) {
    if (id) {
      this.id = id
    }
  }
}