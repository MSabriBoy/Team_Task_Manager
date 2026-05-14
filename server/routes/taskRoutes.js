const express = require("express");
const router = express.Router();

const { createTask } = require("../controllers/taskController");

const protect = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

// Only admin can create/assign tasks
router.post(
    "/create",
    protect,
    authorizeRole("admin"),
    createTask
);

module.exports = router;