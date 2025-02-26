const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

// Route to check server connection
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Route to check DB connection
app.get("/check-db", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) {
      res.status(500).send("Database connection failed");
    } else {
      res.send("Database is connected!");
    }
  });
});

// Route to add new user
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) {
        res.status(500).send("Failed to insert user");
      } else {
        res.send("User added successfully!");
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
