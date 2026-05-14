    const express = require('express')
    const router  = express.Router()

    const {createProject} = require("../controllers/projectController")

    const protect= require("../middleware/authMiddleware")
    const authorizedRole = require("../middleware/roleMiddleware")

    router.post(
        "/create",
        protect,
        authorizedRole("admin"),
        createProject
    );

    module.exports = router;