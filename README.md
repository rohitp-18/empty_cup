# 🏆 EmptyCup

**EmptyCup** is a full-stack web application for managing and showcasing creative agencies. It features a robust **Flask** backend with **MongoDB** for data storage and a sleek **React (Vite)** frontend for a seamless user experience.

---

## ✨ Features

- 🎨 **Agency Management:** Effortlessly add, update, delete, and list creative agencies.
- 🔗 **RESTful API:** Flask backend exposes endpoints for smooth CRUD operations.
- 🗄️ **MongoDB Integration:** Reliable and scalable data storage.
- 💻 **Modern UI:** React frontend with dynamic cards, ratings, and contact info.
- 🐳 **Dockerized:** Run the entire stack locally with Docker Compose in seconds.

---

## 📁 Project Structure

```
empty_cup/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
├── src/                  # React frontend source code
├── package.json          # Frontend dependencies and scripts
├── docker-compose.yaml   # Multi-service orchestration
└── ...
```

---

## 🚀 Getting Started

### 🛠️ Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose installed

### ▶️ Running Locally

1. **Clone the repository:**

```sh
git clone https://github.com/rohitp-18/empty_cup
cd empty_cup
```

2. **Start the application using Docker Compose:**

   ```sh
   docker-compose up --build
   ```

   This command builds and starts both the backend and frontend services.

3. **Access the app:**

   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## 🧩 Technologies Used

- **Backend:** Flask, Flask-RESTful, PyMongo
- **Database:** MongoDB
- **Frontend:** React (Vite), Axios, Material UI
- **Containerization:** Docker, Docker Compose

---

## 📝 Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```
MONGO_URI=mongodb://mongo:27017/emptycup
SECRET_KEY=your-secret-key
```

---
