import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity("User")
export class User {
  @PrimaryGeneratedColumn({ name: "PK" })
    id!: number

  @Column({ name: "username" })
    username: string

  @Column({ name: "password" })
    password:string
}