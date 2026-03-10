import { DataSource } from "typeorm";
import { Order } from "../entities/order.entity";
import { Item } from "../entities/item.entity";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "database.db",
  entities: [Order, Item],
  synchronize: true,
  logging: false,
});