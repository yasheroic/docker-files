# 🐳 Docker Apps Collection

A curated collection of multi-language applications containerized using Docker.

This repository is built for **deep learning, experimentation, and understanding Docker across different technology stacks**. It focuses not just on “running containers” but on writing clean, optimized, production-style Dockerfiles.

---

# 📂 Project Structure

```
docker-apps/
│
├── node-app/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
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
├── java-springboot-app/
│   ├── Dockerfile
│   ├── pom.xml
│   ├── mvnw
│   └── src/
│
└── README.md
```

---

# 🚀 Available Applications

## 1️⃣ Node.js (Express) App

A lightweight Express-based Node.js application running inside Docker.

### 🔹 Highlights

* Express server
* Simple UI page
* Lightweight `node:alpine` base image
* Optimized Docker layer caching
* Production-style dependency handling

### 🛠 Run Locally

```bash
cd node-app
docker build -t node-docker-app .
docker run -p 3000:3000 node-docker-app
```

Access:

```
http://localhost:3000
```

---

## 2️⃣ Python (Flask) App

A structured Flask web application demonstrating containerized template rendering and static asset handling.

### 🔹 Highlights

* Flask web server
* Template rendering (Jinja2)
* Static file handling
* Lightweight `python:alpine` base image
* Clean Docker layering strategy

### 🛠 Run Locally

```bash
cd python-app
docker build -t python-docker-app .
docker run -p 5000:5000 python-docker-app
```

Access:

```
http://localhost:5000
```

---

## 3️⃣ Java (Spring Boot) App

A containerized Spring Boot application demonstrating Java application packaging and Docker integration.

### 🔹 Highlights

* Maven wrapper support
* Spring Boot application structure
* Layered Docker build
* JVM-based container deployment
* Production-style packaging approach

### 🛠 Run Locally

```bash
cd java-springboot-app
docker build -t springboot-docker-app .
docker run -p 8080:8080 springboot-docker-app
```

Access:

```
http://localhost:8080
```

---

# 🧠 Docker Concepts Practiced

This repository demonstrates:

* Dockerfile fundamentals
* Layer caching optimization
* Efficient dependency installation
* `.dockerignore` usage
* Port mapping
* Lightweight base images
* Static file management inside containers
* Template rendering in containers
* Container lifecycle management
* Multi-language containerization patterns

---

# 📦 Future Additions

Planned expansions:

* FastAPI
* Go applications
* PHP apps
* Multi-stage builds
* Docker Compose setups
* Non-root container examples
* Health checks
* CI/CD integration
* Production-grade optimizations
* Container security hardening

---

# 🎯 Purpose of This Repository

This project aims to:

* Build strong Docker fundamentals
* Compare containerization patterns across ecosystems
* Understand image optimization strategies
* Practice production-style Docker builds
* Strengthen DevOps & infrastructure engineering skills

---

# 🏗 Requirements

* Docker installed
* Basic CLI familiarity

---

# 🙏 Acknowledgment

Special thanks to **Shubham Londhe (Train With Shubham)** for teaching the foundational Docker and DevOps concepts that inspired this repository.
