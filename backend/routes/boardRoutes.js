const express = require("express");
const router = express.Router();
const Board = require("../models/Board");

// ✅ GET all boards
router.get("/", async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ CREATE board
router.post("/", async (req, res) => {
  try {
    const board = await Board.create({
      title: req.body.title,
    });
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
