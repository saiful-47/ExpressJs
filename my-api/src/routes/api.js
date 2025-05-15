const express = require('express');
const HelloController = require("../controllers/HelloController");

const router = express.Router();


router.get("/hello-get", HelloController.helloGet);
router.post("/hello-post", HelloController.helloPost);

module.exports = router;