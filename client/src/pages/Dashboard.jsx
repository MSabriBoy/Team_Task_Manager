import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { getDashboardStats } from "../services/dashboardService";

const Dashboard = () => {

  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    overdueTasks: 0
  });

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats = async () => {

    try {

      const res = await getDashboardStats();

      setStats(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <Container className="mt-5">

      <h2 className="mb-4">
        Dashboard
      </h2>

      <Row>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Total Tasks</h5>
            <h3>{stats.totalTasks}</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Completed</h5>
            <h3>{stats.completedTasks}</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Pending</h5>
            <h3>{stats.pendingTasks}</h3>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Overdue</h5>
            <h3>{stats.overdueTasks}</h3>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default Dashboard;