const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
  console.log("aagya bhai ye toh ");
});

module.exports = router;
