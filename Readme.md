Auth-Service

# 🔐 Auth Service (Node.js + JWT)

A production-ready authentication service built using **Node.js, Express, MongoDB**, implementing **JWT-based authentication with refresh tokens and cookie-based security**.

This project demonstrates how modern backend systems handle authentication securely and efficiently.

---

## 🚀 Features

- User registration with password hashing
- Login with JWT access token
- Refresh token rotation
- Cookie-based authentication (HTTP-only)
- Protected routes
- Role-based access (basic)
- Secure logout with token invalidation
- Centralized error handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Access & Refresh Tokens)
- bcrypt
- Cookie-parser

---

## 🔐 Authentication Flow

### 1️⃣ Register

- User submits email & password
- Password is hashed using bcrypt
- User stored securely in database

### 2️⃣ Login

- User credentials verified
- Access token (short-lived) generated
- Refresh token (long-lived) generated
- Tokens sent as **HTTP-only cookies**

### 3️⃣ Access Protected Routes

- Access token is verified via middleware
- User data attached to `req.user`

### 4️⃣ Refresh Token

- When access token expires:
  - Refresh token is validated
  - New access token is issued
- No need to re-login (silent refresh)

### 5️⃣ Logout

- Refresh token removed from database
- Cookies cleared
- User fully logged out

---

## 📂 Project Structure

src/  
├── controllers/  
├── routes/  
├── models/  
├── middlewares/  
├── utils/  
├── config/  
└── app.js

---

## 🔒 Security Practices

- Passwords are never stored in plain text
- HTTP-only cookies prevent XSS attacks
- Refresh tokens stored securely in DB
- Access tokens are short-lived
- Protected routes require authentication

---

## 📌 API Endpoints

| Method | Route     | Description          |
| ------ | --------- | -------------------- |
| POST   | /register | Register user        |
| POST   | /login    | Login user           |
| POST   | /refresh  | Refresh access token |
| POST   | /logout   | Logout user          |
| GET    | /me       | Get logged-in user   |

---

## 🧪 Testing

- Tested using Postman
- Cookies enabled for auth flow
- Refresh token flow verified manually

---

## 📈 Why This Project Matters

This project reflects **real-world backend authentication patterns** used in production systems and demonstrates understanding beyond basic CRUD APIs.

---

## 👨‍💻 Author

Built by Krish Macwan
