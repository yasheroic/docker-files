# 🐳 Docker Apps Collection

A collection of simple applications dockerized using different languages and frameworks.

This repository is created for learning, experimentation, and deeply understanding how Docker works across different stacks.

---

# 📂 Project Structure

```
docker-apps/
│
├── node-app/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── .dockerignore
│
├── python-app/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── templates/
│   └── static/
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
* Optimized Docker layer caching
* Production-style Dockerfile structure

### 🛠 How to Run

```bash
cd node-app
docker build -t node-docker-app .
docker run -p 3000:3000 node-docker-app
```

Open:

```
http://localhost:3000
```

---

## 2️⃣ Python (Flask) App

A clean, modern Flask application with proper project structure and static file handling.

### 🔹 Features

* Flask-based web server
* Template rendering
* Static file support (CSS)
* Clean project structure
* Lightweight Python Alpine base image
* Docker layer caching optimization

### 🛠 How to Run

```bash
cd python-app
docker build -t python-docker-app .
docker run -p 5000:5000 python-docker-app
```

Open:

```
http://localhost:5000
```

---

# 🧠 Concepts Practiced

This repository demonstrates:

* Dockerfile fundamentals
* Layer caching optimization
* `.dockerignore` usage
* Production dependency installation
* Port mapping
* Lightweight base images
* Static file handling inside containers
* Template rendering in containers
* Container lifecycle management

---

# 📦 Future Additions

This repository will expand with Docker examples for:

* FastAPI
* Java (Spring Boot)
* Go
* PHP
* Multi-stage builds
* Docker Compose setups
* Production optimizations
* Non-root containers
* Security best practices
* Health checks
* CI/CD integration

---

# 🎯 Goal of This Repository

The purpose of this project is to:

* Understand Docker fundamentals deeply
* Practice containerizing different stacks
* Learn production-ready Docker patterns
* Build strong DevOps and infrastructure foundations
* Compare how Docker behaves across ecosystems

---

# 🏗 Requirements

* Docker installed
* Basic CLI knowledge
