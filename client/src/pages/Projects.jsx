import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card
} from "react-bootstrap";

const Projects = () => {

  const [projectData, setProjectData] = useState({
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="mt-5">

      <Card className="p-4 shadow">

        <h2 className="mb-4">
          Create Project
        </h2>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>
              Project Name
            </Form.Label>

            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter project name"
            />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Description
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={handleChange}
              placeholder="Enter description"
            />

          </Form.Group>

          <Button type="submit">
            Create Project
          </Button>

        </Form>

      </Card>

    </Container>
  );
};

export default Projects;