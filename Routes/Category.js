const express = require("express");
const {
  update,
  getAllOf,
  create,
  getOneOf,
  deleteOne,
} = require("../Controllers");
const ProductCategory = require("../Models/Category");
const router = express.Router();

router.route("/").post(create(ProductCategory)).get(getAllOf(ProductCategory));

router
  .route("/:_id")
  .put(update(ProductCategory))
  .get(getOneOf(ProductCategory))
  .delete(deleteOne(ProductCategory));

module.exports = router;
