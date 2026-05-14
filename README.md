# 🚀 Ethara.AI Team Task Manager

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing team projects and tasks with role-based access control. The application enables team collaboration with role-specific features for admins and team members.

---

## 📋 Project Overview

The **Team Task Manager** is a web-based project management system designed to streamline team collaboration and task assignment. It provides a comprehensive platform where administrators can create projects, assign tasks to team members, and track overall progress, while team members can view and manage their assigned tasks.

The application features secure authentication with JWT tokens, role-based access control, and real-time task status tracking with dashboard analytics.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login with email and password
- JWT-based authentication with 7-day token expiration
- Password encryption using bcryptjs
- Role-based access control (Admin/Member)

### 📊 Dashboard
- **Real-time Statistics**: Display of total tasks, completed tasks, pending tasks, and overdue tasks
- Task overview for quick insights
- Analytics for project and task completion status

### 📁 Project Management (Admin Only)
- Create new projects with name and description
- View all projects in the system
- Track projects created by admin
- Project organization and categorization

### ✅ Task Management
- **Admin**: Create tasks, assign to team members, manage all tasks
- **Members**: View only assigned tasks, update task status
- Task assignment with due dates
- Task status tracking (Pending, In-Progress, Completed)
- Overdue task detection

### 🎯 Role-Based Features
- **Admin Dashboard**: 
  - Create and manage projects
  - Create and assign tasks to members
  - View all tasks in the system
  - Access complete dashboard statistics
  
- **Member Dashboard**:
  - View assigned tasks only
  - Update task status (Pending → In-Progress → Completed)
  - Track personal task progress
  - View dashboard statistics

### 🧭 Navigation
- Dynamic navigation bar based on user role
- Protected routes with authentication checks
- Role-specific menu items (Projects visible to admins only)
- Quick access to Dashboard, Projects, Tasks, and Logout

---

## 🛠 Tech Stack

### Frontend
- **React 19.2.6** - UI library with hooks
- **React Router DOM 7.15.0** - Client-side routing and navigation
- **Axios 1.16.1** - HTTP client for API communication
- **Bootstrap 5.3.8** - CSS framework for styling
- **React Bootstrap 2.10.10** - Bootstrap component library for React
- **React Toastify 11.1.0** - Toast notifications
- **Vite 8.0.12** - Fast frontend build tool
- **ESLint** - Code quality and linting

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.2.1** - Web application framework
- **MongoDB with Mongoose 9.6.2** - NoSQL database and ODM
- **JWT (jsonwebtoken 9.0.3)** - JSON Web Token for authentication
- **bcryptjs 3.0.3** - Password hashing and encryption
- **CORS 2.8.6** - Cross-Origin Resource Sharing middleware
- **dotenv 17.4.2** - Environment variable management
- **Nodemon 3.1.14** - Development auto-reload (dev only)

---

## 📁 Folder Structure

```
Ethara.AI Team Task Manager/
│
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx          # Navigation bar with role-based menu
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx       # Dashboard with statistics
│   │   │   ├── Login.jsx           # User login page
│   │   │   ├── Signup.jsx          # User registration page
│   │   │   ├── Projects.jsx        # Project management (Admin)
│   │   │   └── Tasks.jsx           # Task management and display
│   │   ├── services/
│   │   │   ├── authService.js      # Authentication API calls
│   │   │   ├── dashboardService.js # Dashboard statistics API
│   │   │   ├── projectService.js   # Project management API
│   │   │   ├── taskService.js      # Task management API
│   │   │   └── userService.js      # User management API
│   │   ├── assets/                 # Static assets
│   │   ├── App.jsx                 # Main app component with routing
│   │   └── main.jsx                # React entry point
│   ├── public/                     # Public assets
│   ├── index.html                  # HTML entry point
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # ESLint rules
│   ├── package.json                # Frontend dependencies
│   └── README.md                   # Frontend-specific documentation
│
└── server/                          # Backend (Express + MongoDB)
    ├── config/
    │   └── db.js                   # MongoDB connection configuration
    ├── controllers/
    │   ├── authController.js       # Authentication logic (register, login)
    │   ├── dashboardController.js  # Dashboard statistics logic
    │   ├── projectController.js    # Project creation and retrieval
    │   └── taskController.js       # Task CRUD operations
    ├── middleware/
    │   ├── authMiddleware.js       # JWT verification middleware
    │   └── roleMiddleware.js       # Role-based authorization middleware
    ├── models/
    │   ├── Project.js              # Project schema (name, description, createdBy)
    │   ├── Task.js                 # Task schema (title, status, assignee, dueDate)
    │   └── User.js                 # User schema (name, email, password, role)
    ├── routes/
    │   ├── authRoutes.js           # Auth endpoints (register, login, getUsers)
    │   ├── dashboardRoutes.js      # Dashboard statistics endpoints
    │   ├── projectRoutes.js        # Project endpoints (create, list)
    │   └── taskRoutes.js           # Task endpoints (create, update, list)
    ├── server.js                   # Express server setup and configuration
    ├── package.json                # Backend dependencies
    └── .env.example                # Example environment variables

```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **Git** for version control

### Backend Setup

1. **Navigate to server directory**:
```bash
cd server
```

2. **Install dependencies**:
```bash
npm install
```

3. **Create `.env` file** in the `server` directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. **Start the backend server**:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to client directory** (in a new terminal):
```bash
cd client
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

The client will run on `http://localhost:5173` (default Vite port)

### Accessing the Application
- Open your browser and navigate to `http://localhost:5173`
- Register a new account or login with existing credentials
- Admins will have access to Project and Task creation features
- Members will see only their assigned tasks

---

## 🔑 Environment Variables Required

### Backend (.env file in `/server`)

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string (Atlas or local) |
| `JWT_SECRET` | Secret key for JWT token signing |
| `NODE_ENV` | Environment mode (development/production) |

**Note**: Never commit actual `.env` files to version control. Use `.env.example` as a template.

---

## 📡 API Endpoints

### Base URL: `http://localhost:5000/api`

### Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| POST | `/auth/register` | Register a new user | ❌ |
| POST | `/auth/login` | Login user and receive JWT token | ❌ |
| GET | `/auth/users` | Get all users (name, email, role) | ✅ |

### Project Endpoints
| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---|---|
| POST | `/projects/create` | Create a new project | ✅ | Admin |
| GET | `/projects/` | Get all projects | ✅ | Any |

**Request Body for POST `/projects/create`**:
```json
{
  "name": "Project Name",
  "description": "Project description"
}
```

### Task Endpoints
| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---|---|
| POST | `/tasks/create` | Create a new task and assign to member | ✅ | Admin |
| GET | `/tasks/` | Get tasks (all for admin, assigned only for member) | ✅ | Any |
| PUT | `/tasks/:id/status` | Update task status | ✅ | Any |

**Request Body for POST `/tasks/create`**:
```json
{
  "title": "Task Title",
  "description": "Task description",
  "project": "project_id",
  "assignedTo": "user_id",
  "dueDate": "2026-06-15"
}
```

**Request Body for PUT `/tasks/:id/status`**:
```json
{
  "status": "in-progress"
}
```

**Task Status Values**: `pending`, `in-progress`, `completed`

### Dashboard Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| GET | `/dashboard/stats` | Get dashboard statistics | ✅ |

**Response**:
```json
{
  "totalTasks": 25,
  "completedTasks": 10,
  "pendingTasks": 12,
  "overdueTasks": 3
}
```

---

## 👥 User Roles

### 1. **Admin** Role
- **Permissions**:
  - Create projects
  - Create and assign tasks to team members
  - View all tasks in the system
  - View all users
  - Update task status
  - Access full dashboard with all statistics
  
- **Navigation Access**:
  - Dashboard
  - Projects (admin-only)
  - Tasks (all tasks)
  - Logout

- **API Access**:
  - All project endpoints
  - All task endpoints
  - All dashboard endpoints

### 2. **Member** Role
- **Permissions**:
  - View only assigned tasks
  - Update status of assigned tasks
  - View dashboard statistics
  - Cannot create projects or tasks
  - Cannot assign tasks to others
  
- **Navigation Access**:
  - Dashboard
  - My Tasks (shows only assigned tasks)
  - Logout
  
- **API Access**:
  - View assigned tasks only
  - Update task status
  - Access dashboard (read-only)

---

## 🔐 Authentication Flow

### User Registration & Login Flow

```
1. User fills registration form
   ↓
2. Frontend sends POST /api/auth/register
   ↓
3. Backend verifies email uniqueness
   ↓
4. Password hashed with bcryptjs (salt rounds: 10)
   ↓
5. User stored in MongoDB
   ↓
6. Success response sent to frontend
```

### Login & Token Generation Flow

```
1. User enters email and password
   ↓
2. Frontend sends POST /api/auth/login
   ↓
3. Backend finds user by email
   ↓
4. Password compared with hashed password using bcrypt
   ↓
5. If valid:
   - JWT token generated with payload:
     * User ID
     * User Role (admin/member)     * Expiration: 7 days
   ↓
6. Token and role sent to frontend
   ↓
7. Frontend stores in localStorage:
   - token
   - role
```

### Request Authentication

All authenticated requests include:
```
Authorization: Bearer <JWT_TOKEN>
```

The `authMiddleware` verifies the token and attaches user data to request object.

### Route Protection

- Protected routes check for token in localStorage
- If token exists → user navigated to requested page
- If token missing → user redirected to login
- On logout → token and role cleared from localStorage

---

## 📸 Screenshots

### Login Page
[Add screenshot of login page after deployment]

### Registration Page
[Add screenshot of signup page after deployment]

### Dashboard
[Add screenshot of dashboard with statistics after deployment]

### Projects Page (Admin)
[Add screenshot of projects management page after deployment]

### Tasks Page
[Add screenshot of tasks list after deployment]

### Task Details
[Add screenshot of task detail view after deployment]

---

## 🌐 Deployment

### Frontend Live Link
[Add after deployment]

### Backend Live Link
[Add after deployment]

### Deployment Steps (Placeholder)

#### Frontend Deployment (Vercel/Netlify)
- [ ] Build the React app: `npm run build`
- [ ] Connect repository to Vercel/Netlify
- [ ] Configure build settings (build command, output directory)
- [ ] Set environment variables (if needed)
- [ ] Deploy and get live URL

#### Backend Deployment (Heroku/Railway/Render)
- [ ] Create account on hosting platform
- [ ] Connect GitHub repository
- [ ] Set environment variables (MONGODB_URI, JWT_SECRET, etc.)
- [ ] Deploy application
- [ ] Update frontend API URL to point to live backend

#### Database Deployment (MongoDB Atlas)
- [ ] Create MongoDB Atlas account
- [ ] Create a cluster
- [ ] Generate connection string
- [ ] Whitelist IP addresses
- [ ] Use connection string in backend `.env`

---

## 🚀 Future Improvements

- [ ] **Email Notifications**: Send email notifications for task assignments and updates
- [ ] **Task Comments**: Add comment section to tasks for team collaboration
- [ ] **File Attachments**: Allow users to upload files to tasks
- [ ] **Task Filters & Search**: Implement advanced filtering by status, due date, assigned member
- [ ] **Project Teams**: Add team members to specific projects
- [ ] **Task Priority Levels**: Add priority (High, Medium, Low) to tasks
- [ ] **Activity Log**: Track all user actions and changes
- [ ] **Real-time Notifications**: WebSocket integration for live updates
- [ ] **Mobile App**: React Native mobile application
- [ ] **Advanced Analytics**: Charts and graphs for project metrics
- [ ] **User Profiles**: User profile pages with detailed information
- [ ] **Task Subtasks**: Break tasks into smaller subtasks
- [ ] **Recurring Tasks**: Create tasks that repeat on schedule
- [ ] **Export Reports**: Generate PDF/Excel reports of tasks and projects
- [ ] **Audit Trail**: Maintain detailed logs of all operations
- [ ] **Integration with External Tools**: Slack, Google Calendar, etc.

## 🔄 Version History

**v1.0.0** - Initial release with core features:
- User authentication with JWT
- Role-based access control (Admin/Member)
- Project management
- Task creation and assignment
- Dashboard with statistics
- Task status tracking
