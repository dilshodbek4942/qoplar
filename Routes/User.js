const express = require("express");
const { getAllOf, getOneOf, deleteOne } = require("../Controllers");
const { create, update } = require("../Controllers/User");
const User = require("../Models/User");
const router = express.Router();

router.route("/").post(create).get(getAllOf(User));

router.route("/:_id").put(update).get(getOneOf(User)).delete(deleteOne(User));

module.exports = router;
