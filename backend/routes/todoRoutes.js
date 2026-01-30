const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Create Todo
router.post("/", async (req, res) => {
  try {
    const { title, board } = req.body;

    if (!title || !board) {
      return res.status(400).json({ message: "Title and Board ID required" });
    }

    const todo = await Todo.create({
      title,
      board,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
