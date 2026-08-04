const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS so the frontend can call this API during local development.
app.use(cors());

// Parse incoming JSON request bodies into JavaScript objects.
app.use(express.json());

// Temporary in-memory task data until PostgreSQL is added.
const tasks = [
  {
    id: 1,
    title: "Finish project setup",
    completed: false,
  },
  {
    id: 2,
    title: "Build task API",
    completed: false,
  },
];

app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});