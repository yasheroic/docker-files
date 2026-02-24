
# 🐳 Docker Apps Collection

A collection of simple applications dockerized using different languages and frameworks.

This repository is created for learning, experimentation, and understanding how Docker works across different stacks.

---

## 📂 Project Structure

```
docker-apps/
│
├── node-app/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── .dockerignore
│
├── (more apps coming soon...)
│
└── README.md
```

---

# 🚀 Available Applications

## 1️⃣ Node.js App

A simple Express-based Node.js application running inside Docker.

### 🔹 Features

* Express server
* Simple UI page
* Dockerized using lightweight Node Alpine image
* Production-ready Dockerfile structure

---

## 🛠 How to Run (Node App)

### Step 1 — Navigate to App

```bash
cd node-app
```

### Step 2 — Build Docker Image

```bash
docker build -t node-docker-app .
```

### Step 3 — Run Container

```bash
docker run -p 3000:3000 node-docker-app
```

Open in browser:

```
http://localhost:3000
```

---

## 🧠 Concepts Practiced

* Dockerfile basics
* Layer caching
* `.dockerignore`
* Production dependency install
* Port mapping
* Lightweight base images
* Container lifecycle

---

## 📦 Future Additions

This repository will expand with Docker examples for:

* Python (Flask / FastAPI)
* Java (Spring Boot)
* Go
* PHP
* Multi-stage builds
* Docker Compose setups
* Production optimizations
* Security best practices

---

## 🎯 Goal of This Repository

The purpose of this project is to:

* Understand Docker fundamentals deeply
* Practice containerizing different stacks
* Learn production-ready Docker patterns
* Build a strong DevOps foundation

---

## 🏗 Requirements

* Docker installed
* Basic understanding of CLI

---
