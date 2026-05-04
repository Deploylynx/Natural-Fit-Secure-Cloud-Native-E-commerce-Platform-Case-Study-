# 🚀 DeployLynx DevSecOps CI/CD Pipeline

A production-ready DevSecOps project built by **Hina Atif** demonstrating CI/CD automation, containerization, cloud deployment, and monitoring.

---

## 📌 Project Overview

This project demonstrates a full DevSecOps pipeline including:

- Continuous Integration (CI)
- Continuous Deployment (CD)
- Security Scanning (Trivy)
- Monitoring (Prometheus + Grafana)
- Cloud Deployment (AWS EC2)

---

## 🏗️ Architecture


GitHub
↓
GitHub Actions (CI/CD)
↓
Docker Build & Push
↓
AWS EC2
↓
Docker Container (App)
↓
NGINX Reverse Proxy
↓
User Browser

Monitoring:
Prometheus → Grafana


---

## ⚙️ Tech Stack

- GitHub Actions
- Docker
- AWS EC2
- NGINX
- Prometheus
- Grafana
- Trivy

---

## 🔁 CI/CD Pipeline

1. Code pushed to GitHub
2. GitHub Actions triggered
3. Docker image built
4. Image pushed to registry
5. EC2 pulls image
6. Container deployed

---

## 🔐 Security (DevSecOps)

- Trivy scans Docker images
- Detects vulnerabilities (CVE)
- Ensures secure deployment

---

## 📊 Monitoring

### Prometheus
- Metrics collection
- Target status: UP ✔

### Grafana
- Visualization dashboard
- Real-time system health

---

## 🌍 Live URLs

- App: http://3.232.104.228  
- Prometheus: http://3.232.104.228:9090  
- Grafana: http://3.232.104.228:3001  

---

## 📸 Screenshots

### CI/CD Pipeline
![CI/CD](images/cicd.png)

### Docker Containers
![Docker](images/docker.png)

### Prometheus Targets
![Prometheus](images/prometheus.png)

### Grafana Dashboard
![Grafana](images/grafana.png)

---

## 🧠 Key Learnings

- CI/CD automation
- Docker containerization
- AWS deployment
- Monitoring systems
- DevSecOps security scanning

---

## 🏆 Status

✔ Pipeline Active  
✔ Deployment Successful  
✔ Monitoring Working  
✔ Security Enabled  

---

## 👨‍💻 Author

Hina Atif  
DevSecOps Engineer (Aspiring)
