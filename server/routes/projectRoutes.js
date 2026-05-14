const express = require('express')
const router = express.Router()

const {
    createProject,
    getProjects
} = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware")
const authorizedRole = require("../middleware/roleMiddleware")

router.post(
    "/create",
    protect,
    authorizedRole("admin"),
    createProject
);

router.get(
    "/",
    protect,
    getProjects
);

module.exports = router;