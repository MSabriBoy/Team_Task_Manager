import { useState } from "react";
import { toast } from "react-toastify";

import {
  Container,
  Form,
  Button,
  Card
} from "react-bootstrap";

import axios from "axios";

const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      toast.success(
        "Signup Successful"
      );

      window.location.replace("/");

    } catch (error) {

      toast.error(
        error.response.data.message
      );

    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">

      <Card className="p-4 shadow" style={{ width: "400px" }}>

        <h2 className="text-center mb-4">
          Signup
        </h2>

        <Form onSubmit={handleSignup}>

          <Form.Control
            className="mb-3"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <Form.Control
            className="mb-3"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <Form.Control
            className="mb-3"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <Form.Select
            className="mb-3"
            name="role"
            onChange={handleChange}
          >

            <option value="member">
              Member
            </option>

            <option value="admin">
              Admin
            </option>

          </Form.Select>

          <Button
            type="submit"
            className="w-100"
          >
            Signup
          </Button>

        </Form>

      </Card>

    </Container>
  );
};

export default Signup;