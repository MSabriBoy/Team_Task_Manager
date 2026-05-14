# Team Task Manager

A simple MERN stack app for managing team projects and tasks. It uses role-based access so admins can create projects and assign work, while members can view and update the tasks assigned to them.

## Project Overview

This project is built to keep team work organized in one place. Users can sign up, log in, see a dashboard summary, browse projects, and manage tasks from a single interface. The app uses JWT authentication, protected routes, and role checks to separate admin and member access.

## Features

- User registration and login
- JWT-based authentication
- Role-based access for Admin and Member
- Dashboard stats for total, completed, pending, and overdue tasks
- Admin-only project creation
- Admin task creation and assignment to members
- Task status updates for pending, in-progress, and completed work
- Dynamic navigation based on the signed-in role
- Protected frontend routes

## Tech Stack

Frontend:
- React
- React Router DOM
- Axios
- Bootstrap
- React Bootstrap
- React Toastify
- Vite

Backend:
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- CORS
- dotenv

## Folder Structure

```text
client/
  src/
    components/
      Navbar.jsx
    pages/
      Dashboard.jsx
      Login.jsx
      Projects.jsx
      Signup.jsx
      Tasks.jsx
    services/
      authService.js
      dashboardService.js
      projectService.js
      taskService.js
      userService.js
    App.jsx
    main.jsx

server/
  config/
    db.js
  controllers/
    authController.js
    dashboardController.js
    projectController.js
    taskController.js
```bash
npm start
```

The backend runs on `http://localhost:5000` by default.

### Frontend

1. Open a new terminal and go to the client folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

The frontend runs on Vite's default local port.

## Environment Variables Required

Backend variables used by the app:

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`

## User Roles

### Admin

- Can create projects
- Can create and assign tasks
- Can see all tasks
- Can view the dashboard stats
- Can access the Projects page from the navbar

### Member

- Can log in and view assigned work
- Can update task status
- Cannot create projects or assign tasks
- Sees `My Tasks` in the navbar instead of `Tasks`

## Authentication Flow

1. A user signs up with name, email, password, and role.
2. The backend hashes the password before saving the user.
3. On login, the backend checks the password and returns a JWT token plus the user role.
4. The frontend stores the token and role in `localStorage`.
5. Protected pages check for the token before rendering.
6. API requests send the token in the `Authorization: Bearer <token>` header.
7. Logout clears the stored token and role.


## Deployment

Frontend Live Link: [Add after deployment]

Backend Live Link: [Add after deployment]

## Future Improvements

- Add task filtering and search
- Add comments on tasks
- Add file uploads
- Add notifications for new assignments
- Add project-level reporting
- Add a richer activity log

