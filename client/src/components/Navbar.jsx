import {
    Navbar,
    Nav,
    Container
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.replace("/");
};

    return (
        <Navbar bg="dark" variant="dark">

            <Container>

                <Navbar.Brand>
                    Team Task Manager
                </Navbar.Brand>

                <Nav>

                    <Nav.Link as={Link} to="/dashboard">
                        Dashboard
                    </Nav.Link>

                    <Nav.Link as={Link} to="/projects">
                        Projects
                    </Nav.Link>

                    <Nav.Link as={Link} to="/tasks">
                        Tasks
                    </Nav.Link>

                    <Nav.Link onClick={handleLogout}>
                        Logout
                    </Nav.Link>

                </Nav>

            </Container>

        </Navbar>
    );
};

export default AppNavbar;