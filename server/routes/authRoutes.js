const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { registerUser,loginUser, getUsers } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get(
    "/users",
    protect,
    getUsers
);

module.exports = router;