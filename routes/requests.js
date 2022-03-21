var express = require("express");
var router = express.Router();

/* GET status */
router.get("/status", function (req, res) {
  res.status(204).send("No Content");
});

router.get("/info", function (req, res, next) {
  res.status(200).send({ url: "ruta?" });
});

router.delete("/security", function (req, res, next) {
  res.status(401).send("Unauthorizerd");
});

module.exports = router;
