import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-5">

      <h2 className="mb-4">
        Dashboard
      </h2>

      <Row>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Total Tasks</h5>
            <h3>0</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Completed</h5>
            <h3>0</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Pending</h5>
            <h3>0</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Overdue</h5>
            <h3>0</h3>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default Dashboard;