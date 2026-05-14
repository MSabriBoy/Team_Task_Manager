const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {

        const {
            title,
            description,
            project,
            assignedTo,
            dueDate
        } = req.body;

        const task = await Task.create({
            title,
            description,
            project,
            assignedTo,
            dueDate
        });

        res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const updateTaskStatus = async (req, res) => {
    try {

        const { status } = req.body;

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task status updated",
            task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getTasks = async (req, res) => {
    try {

        let tasks;

        if (req.user.role === "admin") {

            tasks = await Task.find();

        } else {

            tasks = await Task.find({
                assignedTo: req.user.id
            });

        }

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createTask,
    updateTaskStatus,
    getTasks
};