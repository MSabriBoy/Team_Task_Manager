const express = require("express");
const router = express.Router();

const {
  createTask,
  updateTaskStatus,
  getTasks
} = require("../controllers/taskController");

const protect = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

// Only admin can create/assign tasks
router.post(
    "/create",
    protect,
    authorizeRole("admin"),
    createTask
);

router.put(
    "/:id/status",
    protect,
    updateTaskStatus
);

router.get(
  "/",
  protect,
  getTasks
);

module.exports = router;