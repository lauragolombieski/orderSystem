import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  PrimaryColumn
} from "typeorm";
import { Item } from "./item.entity";

@Entity()
export class Order {
  @PrimaryColumn({ type: "text" })
  orderId!: string;

  @Column("real")
  value!: number;

  @CreateDateColumn()
  creationDate!: Date;

  @OneToMany(() => Item, item => item.order, {
    cascade: true
  })
  items!: Item[];
}