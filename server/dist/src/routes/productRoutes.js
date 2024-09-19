"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControllers_1 = require("../controllers/productsControllers");
const router = (0, express_1.Router)();
router.get("/", productsControllers_1.getProducts);
router.post("/", productsControllers_1.createProducts);
exports.default = router;
