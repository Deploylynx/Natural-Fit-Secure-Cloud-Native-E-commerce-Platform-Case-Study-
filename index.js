const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to NaturalFit Herbal Products 🌿 — Delivering pure, natural, and effective wellness solutions for a healthier lifestyle. Trusted quality, inspired by nature.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});