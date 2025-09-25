import express from "express";
import { createItem, getItems } from "../controllers/item.controller.js";

const router = express.Router();

// POST → add new item
router.post("/", createItem);

// GET → fetch all items
router.get("/", getItems);

// Add this route if not present:
router.get("/", (req, res) => {
  res.send("Item route is working!");
});

export default router;
