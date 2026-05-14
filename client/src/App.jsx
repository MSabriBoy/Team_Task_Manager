import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import AppNavbar from "./components/Navbar";

function App() {

  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
   {token && <AppNavbar />}

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
  path="/dashboard"
  element={
    token
      ? <Dashboard />
      : <Navigate to="/" />
  }
/>

        <Route
  path="/projects"
  element={
    token
      ? <Projects />
      : <Navigate to="/" />
  }
/>

        <Route
  path="/tasks"
  element={
    token
      ? <Tasks />
      : <Navigate to="/" />
  }
/>

      </Routes>

      <ToastContainer />

    </BrowserRouter>
  );
}

export default App;