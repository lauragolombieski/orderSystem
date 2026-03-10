import { Router } from "express";
import { OrderController } from "../controllers/orderController";

const router = Router();

router.get("/", (req, res) => OrderController.getAllOrders(req, res));

router.get("/:id", (req, res) => OrderController.getOrderById(req, res));

router.post("/", (req, res) => OrderController.createOrder(req, res));

router.put("/:id", (req, res) => OrderController.updateOrder(req, res));

router.delete("/:id", (req, res) => OrderController.deleteOrder(req, res));

export default router;