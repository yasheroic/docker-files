# 🐳 Docker Apps Collection

A curated collection of multi-language applications containerized using Docker.

This repository is built for **deep learning, experimentation, and understanding Docker across different technology stacks**. It focuses not just on “running containers” but on writing clean, optimized, production-style Dockerfiles — including **multi-stage builds**.

---

# 📂 Project Structure

```
docker-apps/
│
├── node-app/
│
├── python-app/
│
├── java-springboot-app/
│
├── go-app/
│   ├── Dockerfile              # Normal Docker build
│   ├── Dockerfile.multistage   # Multi-stage optimized build
│   ├── go.mod
│   └── main.go
│
└── README.md
```

---

# 🚀 Available Applications

## 1️⃣ Node.js (Express) App

A lightweight Express-based Node.js application running inside Docker.

### 🔹 Highlights

* Express server
* Lightweight `node:alpine` base image
* Optimized Docker layer caching
* Production-style dependency handling

### 🛠 Run

```bash
cd node-app
docker build -t node-docker-app .
docker run -p 3000:3000 node-docker-app
```

---

## 2️⃣ Python (Flask) App

A structured Flask web application demonstrating template rendering and static asset handling inside containers.

### 🔹 Highlights

* Flask web server
* Static + template handling
* Lightweight `python:alpine` image
* Clean Docker layering

### 🛠 Run

```bash
cd python-app
docker build -t python-docker-app .
docker run -p 5000:5000 python-docker-app
```

---

## 3️⃣ Java (Spring Boot) App

A containerized Spring Boot application demonstrating Java packaging and Docker integration.

### 🔹 Highlights

* Maven wrapper support
* Layered Docker build
* JVM-based container deployment
* Production-style packaging

### 🛠 Run

```bash
cd java-springboot-app
docker build -t springboot-docker-app .
docker run -p 8080:8080 springboot-docker-app
```

---

## 4️⃣ Go App (Normal & Multi-Stage Build)

A minimal Go web server demonstrating both a **standard Docker build** and an **optimized multi-stage build**.

### 🔹 Highlights

* Lightweight Go HTTP server
* Standard Dockerfile
* Multi-stage build for smaller image size
* Distroless / minimal runtime optimization
* Binary compilation inside container

---

### 🛠 Normal Docker Build

```bash
cd go-app
docker build -t go-docker-app .
docker run -p 8081:8081 go-docker-app
```

---

### 🛠 Multi-Stage Optimized Build

```bash
cd go-app
docker build -f Dockerfile.multistage -t go-docker-app-ms .
docker run -p 8081:8081 go-docker-app-ms
```

---

# 🧠 Docker Concepts Practiced

This repository demonstrates:

* Dockerfile fundamentals
* Layer caching optimization
* Multi-stage builds
* Efficient dependency installation
* `.dockerignore` usage
* Port mapping
* Lightweight base images
* Static file management
* Template rendering
* JVM vs compiled binary containerization
* Image size optimization strategies
* Container lifecycle management

---

# 📦 Future Additions

Planned expansions:

* FastAPI
* Advanced Go examples
* PHP apps
* Docker Compose setups
* Non-root containers
* Health checks
* CI/CD integration
* Production-grade optimizations
* Container security hardening

---

# 🎯 Purpose of This Repository

This project aims to:

* Build strong Docker fundamentals
* Compare containerization patterns across ecosystems
* Understand image optimization deeply
* Practice production-ready Docker patterns
* Strengthen DevOps & infrastructure engineering skills

---

# 🏗 Requirements

* Docker installed
* Basic CLI familiarity

---

# 🙏 Acknowledgment

Special thanks to **Shubham Londhe (Train With Shubham)** for teaching the foundational Docker and DevOps concepts that inspired this repository.

---
