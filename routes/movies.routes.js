const express = require("express");
const router = express.Router();

const { addItemController } = require("../controllers/movies.controller");

const { isAuthorised } = require("../middlewares/authorisation.middleware");

router.post("/movies", isAuthorised, addItemController);

// //VIEW THE USER DATA

module.exports = router;
