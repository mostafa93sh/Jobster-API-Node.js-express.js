# 🚀 Jobster API

A full-stack job management platform that enables users to track, manage, and visualize job applications with real-time analytics and authentication.

---

## 📋 Overview

**Jobster** is a comprehensive job tracking application built with modern web technologies. The **frontend UI was pre-built** with React and Redux. This project focuses on **backend API development** with Node.js and Express, implementing secure authentication, persistent data storage with MongoDB, job management endpoints, and robust error handling to power the existing frontend interface.

---

## 🛠 Core Technologies

### **Backend Stack (Project Focus)**

| Technology                | Purpose                                  |
| ------------------------- | ---------------------------------------- |
| **Node.js & Express.js**  | Server runtime & REST API framework      |
| **MongoDB**               | NoSQL database with Mongoose ODM         |
| **JWT (JSON Web Tokens)** | Stateless authentication & authorization |
| **Bcryptjs**              | Password hashing & encryption            |
| **Joi**                   | Request validation & schema enforcement  |
| **Mongoose**              | MongoDB object modeling & schema         |

### **Frontend Stack (Pre-Built)**

| Technology            | Purpose                           |
| --------------------- | --------------------------------- |
| **React 18**          | Component-based UI library        |
| **Redux Toolkit**     | Centralized state management      |
| **React Router v6**   | Client-side routing & navigation  |
| **Axios**             | HTTP client for API communication |
| **Styled Components** | CSS-in-JS styling solution        |
| **Recharts**          | Data visualization & charts       |

### **Security & DevOps**

| Package                | Purpose                       |
| ---------------------- | ----------------------------- |
| **Helmet**             | HTTP headers security         |
| **XSS-Clean**          | XSS attack prevention         |
| **Express Rate Limit** | DDoS & brute-force protection |
| **CORS**               | Cross-origin resource sharing |
| **Nodemon**            | Development hot-reload        |

---

## 🎯 Backend Development Focus

### **Authentication & Authorization** 🔐

- JWT-based stateless authentication system
- Bcryptjs password hashing with salt rounds
- Protected routes with middleware authentication
- Token validation & user verification on every secured request
- User registration & login controllers

### **REST API & Job Management** 📦

- Complete CRUD operations for job records
- Advanced filtering by status, job type, sort order
- Pagination support for large job datasets
- Job creation with automatic timestamps
- Mongoose schema validation & relationships

### **Data Persistence & Modeling** 💾

- MongoDB NoSQL database integration
- Mongoose ODM for schema definition & validation
- User model with authentication fields
- Job model with user references & metadata
- Database connection pooling & management

### **Validation & Error Handling** ✅

- Joi schema validation for request bodies
- Custom error classes (BadRequest, NotFound, Unauthenticated)
- Centralized error middleware pipeline
- HTTP status codes & meaningful error messages
- Async error handling with express-async-errors

---

## 📂 Backend Project Structure

```
├── controllers/          # ⚙️  Business logic & request handlers
│   ├── auth.js         # Registration & login logic
│   └── jobs.js         # CRUD operations for jobs
├── routes/              # 🛣️  API endpoint definitions
│   ├── auth.js         # /api/v1/auth/* routes
│   └── jobs.js         # /api/v1/jobs/* routes
├── models/              # 🗄️  MongoDB schemas
│   ├── User.js         # User schema & auth fields
│   └── Job.js          # Job schema & relationships
├── middleware/          # 🔄  Request processing pipeline
│   ├── authentication.js # JWT verification
│   ├── error-handler.js # Error processing
│   └── not-found.js     # 404 handling
├── db/                  # 📡 Database configuration
│   └── connect.js      # MongoDB connection setup
├── errors/              # ⚠️  Custom error classes
│   ├── custom-api.js   # Base error class
│   ├── bad-request.js  # 400 errors
│   ├── not-found.js    # 404 errors
│   └── unauthenticated.js # 401 errors
├── client/              # 🎨 Pre-built React frontend
└── app.js              # 🚀 Express server initialization
```

---

## ⚡ Quick Start

### **Prerequisites**

- Node.js 14.x or higher
- MongoDB instance (local or cloud)
- npm or yarn package manager

### **Installation**

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### **Environment Setup**

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://your-connection-string
JWT_SECRET=your-secret-key
JWT_LIFETIME=7d
```

### **Running the Application**

```bash
# Development mode (with hot-reload)
npm run dev

# Production mode
npm start
```

The application will be available at `http://localhost:3000`

---

## 🔑 Key Architectural Patterns

| Pattern                 | Implementation                                      |
| ----------------------- | --------------------------------------------------- |
| **MVC Architecture**    | Controllers → Routes → Models                       |
| **Middleware Pipeline** | Auth → Validation → Business Logic → Error Handling |
| **Redux Thunks**        | Async operations & side effects                     |
| **Protected Routes**    | ProtectedRoute wrapper component                    |
| **Custom Hooks**        | Reusable component logic                            |
| **Error Boundaries**    | Graceful error handling & UI recovery               |

---

## 📊 API Endpoints

### **Authentication**

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/auth/updateUser` - Update user profile

### **Jobs**

- `GET /api/v1/jobs` - Fetch all jobs (with filtering & pagination)
- `POST /api/v1/jobs` - Create new job
- `PATCH /api/v1/jobs/:id` - Update job
- `DELETE /api/v1/jobs/:id` - Delete job

---

## 🔐 Security Features

✅ **JWT Authentication** - Secure token-based auth  
✅ **Password Hashing** - Bcryptjs salted hashing  
✅ **HTTP Headers Security** - Helmet middleware  
✅ **XSS Protection** - XSS-clean sanitization  
✅ **Rate Limiting** - Request throttling  
✅ **Input Validation** - Joi schema validation

---

## 📈 Backend Development Workflow

1. **API Endpoint Development** → Create routes, controllers, and middleware
2. **Database Modeling** → Define Mongoose schemas and relationships
3. **Authentication** → Implement JWT validation and user verification
4. **Validation** → Add Joi schemas for request data validation
5. **Error Handling** → Create custom error classes and middleware
6. **Testing** → Test endpoints with Postman/Insomnia or curl
7. **Hot-Reload** → Nodemon automatically restarts server on changes
8. **Production Deploy** → Serve built React frontend from Express static files

---

## 🎓 Backend Learning Objectives

This project demonstrates proficiency in:

- ✅ RESTful API design & HTTP methods
- ✅ Node.js & Express.js server architecture
- ✅ Database modeling with Mongoose & MongoDB
- ✅ Authentication & authorization with JWT
- ✅ Middleware pipeline & request processing
- ✅ Input validation & sanitization
- ✅ Error handling & status codes
- ✅ Security best practices (Helmet, XSS protection, rate limiting)
- ✅ Production-ready backend deployment patterns

---

## 📝 License

ISC

---

**Built with ❤️ | Full-Stack JavaScript Application**
