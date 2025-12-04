import express from "express";
import MenuOrder from "../models/MenuOrder.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const newOrder = await MenuOrder.create(req.body);

    res.json({
      success: true,
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
