import { useState } from "react";
import { toast } from "react-toastify";
import {
  Container,
  Form,
  Button,
  Card
} from "react-bootstrap";

import { loginUser } from "../services/authService";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await loginUser(formData);

      localStorage.setItem(
        "token",
        res.data.token
      );

      toast.success("Login Successful");

      console.log(res.data);

    } catch (error) {

      toast.error(error.response.data.message);

    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">

      <Card className="p-4 shadow" style={{ width: "400px" }}>
        
        <h2 className="text-center mb-4">
          Login
        </h2>

        <Form onSubmit={handleLogin}>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter password"
            />

          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            className="w-100"
          >
            Login
          </Button>

        </Form>

      </Card>

    </Container>
  );
};

export default Login;