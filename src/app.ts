import express from "express";
import { setupSwagger } from "./config/swagger";

const app = express();

app.use(express.json());
setupSwagger(app);

export default app;