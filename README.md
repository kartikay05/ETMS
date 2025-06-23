# ETMS - Employee Task Management System

A modern web application for managing employee tasks, built using **React.js** and styled with **Tailwind CSS**. Designed to provide separate dashboards for **Admins** and **Employees**, ETMS streamlines task assignment and tracking.

## 🔗 Live Demo

🌐 https://etms-orcin.vercel.app/

---

## 📌 Features

- 🔐 Admin and Employee login system
- 📋 Task assignment and tracking
- 📊 Dashboard overview for both roles
- 📁 LocalStorage-based task persistence *(soon to be upgraded to MongoDB)*

---

## 🛠 Tech Stack

| Frontend  | Libraries/Tools         |
|-----------|--------------------------|
| React     | React Router, Context API |
| Tailwind  | For custom UI components |
| Vercel    | Deployment               |

> Backend (Coming Soon): **MongoDB, Express, Node.js**

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/kartikay05/ETMS.git
cd ETMS
npm install
npm run dev   # For Vite


ETMS/
├── components/     # Reusable UI components
├── pages/          # Page components for routing
├── context/        # Auth/User context
├── assets/         # Images and icons
├── App.jsx
└── main.jsx
