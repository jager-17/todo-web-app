const express = require("express");
const router = express.Router();
const Board = require("../models/Board");

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title required" });
    }

    const board = await Board.create({ title });

    return res.status(201).json(board);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
