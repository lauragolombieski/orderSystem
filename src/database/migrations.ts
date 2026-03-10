import { AppDataSource } from "./database";

async function runMigration() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS orders (
      orderId TEXT PRIMARY KEY, 
      value REAL,
      creationDate TEXT
    )
  `);

  await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS items (
      productId TEXT PRIMARY KEY,
      quantity INTEGER,
      price REAL,
      orderId TEXT, 
      FOREIGN KEY(orderId) REFERENCES orders(orderId)
    )
  `);

  await queryRunner.release();
  console.log("Migration executed successfully");
}

runMigration().catch(console.error);