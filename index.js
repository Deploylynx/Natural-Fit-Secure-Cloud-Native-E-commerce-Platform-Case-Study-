const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("NaturalFit Herbal Products 🌿 — Empowering healthier lives through nature-driven solutions. Experience purity, quality, and wellness you can trust.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});