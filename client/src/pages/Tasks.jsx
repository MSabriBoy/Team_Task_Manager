import { useState, useEffect } from "react";
import {
    Container,
    Form,
    Button,
    Card,
    Table
} from "react-bootstrap";

import { toast } from "react-toastify";

import {
    createTask,
    getTasks,
    updateTaskStatus
} from "../services/taskService";

import { getProjects } from "../services/projectService";

import { getUsers } from "../services/userService";

const Tasks = () => {

    const [tasks, setTasks] = useState([]);

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        project: "",
        assignedTo: "",
        dueDate: ""
    });

    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchTasks();
        fetchProjects();
        fetchUsers();
    }, []);

    const fetchTasks = async () => {
        try {

            const res = await getTasks();

            setTasks(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    const fetchProjects = async () => {

        try {

            const res = await getProjects();

            setProjects(res.data);

        } catch (error) {

            console.log(error);

        }
    };

    const fetchUsers = async () => {

        try {

            const res = await getUsers();

            const members = res.data.filter(
                (user) => user.role === "member"
            );

            setUsers(members);

        } catch (error) {

            console.log(error);

        }
    };

    const handleChange = (e) => {
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await createTask(taskData);

            toast.success("Task created successfully");

            fetchTasks();

        } catch (error) {

            toast.error(error.response.data.message);

        }
    };

    const handleStatusChange = async (
        taskId,
        status
    ) => {

        try {

            await updateTaskStatus(
                taskId,
                status
            );

            toast.success("Status updated");

            fetchTasks();

        } catch (error) {

            toast.error("Something went wrong");

        }
    };

    return (
        <Container className="mt-5">

            <Card className="p-4 shadow mb-4">

                <h2 className="mb-4">
                    Create Task
                </h2>

                <Form onSubmit={handleSubmit}>

                    <Form.Control
                        className="mb-3"
                        name="title"
                        placeholder="Task Title"
                        onChange={handleChange}
                    />

                    <Form.Control
                        className="mb-3"
                        name="description"
                        placeholder="Task Description"
                        onChange={handleChange}
                    />

                    <Form.Select
                        className="mb-3"
                        name="project"
                        onChange={handleChange}
                    >

                        <option>
                            Select Project
                        </option>

                        {
                            projects.map((project) => (
                                <option
                                    key={project._id}
                                    value={project._id}
                                >
                                    {project.name}
                                </option>
                            ))
                        }

                    </Form.Select>

                    <Form.Select
                        className="mb-3"
                        name="assignedTo"
                        onChange={handleChange}
                    >

                        <option>
                            Select Member
                        </option>

                        {
                            users.map((user) => (
                                <option
                                    key={user._id}
                                    value={user._id}
                                >
                                    {user.name}
                                </option>
                            ))
                        }

                    </Form.Select>

                    <Form.Control
                        className="mb-3"
                        type="date"
                        name="dueDate"
                        onChange={handleChange}
                    />

                    <Button type="submit">
                        Create Task
                    </Button>

                </Form>

            </Card>

            <Card className="p-4 shadow">

                <h3 className="mb-4">
                    All Tasks
                </h3>

                <Table striped bordered>

                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            tasks.map((task) => (
                                <tr key={task._id}>

                                    <td>
                                        {task.title}
                                    </td>

                                    <td>

                                        <Form.Select
                                            value={task.status}
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    task._id,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            <option value="pending">
                                                Pending
                                            </option>

                                            <option value="in-progress">
                                                In Progress
                                            </option>

                                            <option value="completed">
                                                Completed
                                            </option>

                                        </Form.Select>

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </Table>

            </Card>

        </Container>
    );
};

export default Tasks;