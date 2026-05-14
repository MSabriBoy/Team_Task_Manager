import { useState } from "react";
import { toast } from "react-toastify";
import { createTask } from "../services/taskService";
import {
    Container,
    Form,
    Button,
    Card
} from "react-bootstrap";

const Tasks = () => {

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        project: "",
        assignedTo: "",
        dueDate: ""
    });

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

            setTaskData({
                title: "",
                description: "",
                project: "",
                assignedTo: "",
                dueDate: ""
            });

        } catch (error) {

            toast.error(error.response.data.message);

        }
    };

    return (
        <Container className="mt-5">

            <Card className="p-4 shadow">

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

                    <Form.Control
                        className="mb-3"
                        name="project"
                        placeholder="Project ID"
                        onChange={handleChange}
                    />

                    <Form.Control
                        className="mb-3"
                        name="assignedTo"
                        placeholder="Member User ID"
                        onChange={handleChange}
                    />

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

        </Container>
    );
};

export default Tasks;