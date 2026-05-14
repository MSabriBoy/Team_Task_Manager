import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

      </Routes>

      <ToastContainer />

    </BrowserRouter>
  );
}

export default App;