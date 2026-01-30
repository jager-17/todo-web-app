# Todo Web Application

This is a full-stack Todo / Board management web application developed using **React with Vite** for the frontend, **Firebase Authentication** for user login and signup, and **Node.js, Express, and MongoDB** for the backend.

---

## Features

- User Signup and Login using Firebase Authentication
- Authentication-protected dashboard
- Create Todo Boards
- Fetch and display boards
- REST APIs using Express
- MongoDB database integration

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)

---

## Project Structure

todo-web-app/
│
├── src/
│ ├── pages/
│ │ ├── Login.jsx
│ │ └── Signup.jsx
│ ├── firebase.js
│ ├── App.jsx
│ └── main.jsx
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ └── .env
│
└── README.md


---

## Authentication

Firebase Authentication is used for:
- Email and Password Signup
- Email and Password Login

Authentication state is handled using Firebase's `onAuthStateChanged` method.

---

## Database Configuration

This project uses **MongoDB Atlas** as the database.
---

## How to Run the Project

### Frontend
```bash
npm install
npm run dev

cd backend
npm install
node index.js
Backend runs on:

arduino
Copy code
http://localhost:5001

API Endpoints

POST /api/boards → Create a board

GET /api/boards → Get all boards

GET /api/todos/:boardId → Get todos of a board