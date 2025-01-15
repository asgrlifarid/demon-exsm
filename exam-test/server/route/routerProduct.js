

const express = require("express");
const { getProd, getProdById, deleteById, postProd } = require("../controlller/controlProduct");

const router = express.Router();

router.get("/", getProd)
router.get("/:id", getProdById)
router.delete("/:id", deleteById)
router.post("/", postProd)

module.exports = router;