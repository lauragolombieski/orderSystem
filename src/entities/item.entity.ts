import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn
} from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Item {
  @PrimaryColumn({ type: "text" })
  orderId!: string;

  @Column()
  productId!: string;

  @Column()
  quantity!: number;

  @Column("real")
  price!: number;

  @ManyToOne(() => Order, order => order.items, {
    onDelete: "CASCADE"
  })
  order!: Order;
}