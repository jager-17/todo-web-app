const connectDB = require("./db");


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const boardRoutes = require("./routes/boardRoutes");
const todoRoutes = require("./routes/todoRoutes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/boards", boardRoutes);
app.use("/api/todos", todoRoutes);



app.get("/", (req, res) => {
  res.send("Backend running");
});
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});