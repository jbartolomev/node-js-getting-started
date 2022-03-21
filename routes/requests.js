var express = require("express");
var router = express.Router();

/* GET  */
router.get("/status", function (req, res, next) {
  res.render("index", { title: "STATUS" });
});

module.exports = router;
