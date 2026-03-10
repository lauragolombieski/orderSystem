import app from "./app";
import { AppDataSource } from "./database/database";

const PORT: number = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Aplicação rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing database", error);
  });