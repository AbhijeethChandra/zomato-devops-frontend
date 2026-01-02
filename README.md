Installation & Setup
1️. Clone the project
git clone https://github.com/your-repo/zomato-ish.git
cd zomato-ish
2️. Install dependencies
npm install
3️. Start JSON‑Server
npx json-server --watch mock-api/db.json --port 5000
4️. Run Vite development server
npm run dev
Your app will be live at:

http://localhost:5173

API Structure (db.json)
Example:

{
  "restaurants": [
    {
      "id": 1,
      "name": "Spice Hub",
      "cuisine": ["Indian", "Biryani"],
      "rating": 4.5,
      "deliveryTime": 30,
      "costForTwo": 400,
      "image": "https://...",
      "address": "Kochi, Kerala",
      "phone": "+91 9876543210",
      "website": "https://...",
      "description": "A cozy place for biryani lovers.",
      "menu": [
        { "id": 1, "name": "Chicken Biryani", "price": 180 },
        { "id": 2, "name": "Paneer Tikka", "price": 160 }
      ]
    }
  ]
}


# Zomato Clone – Dockerized Full Stack App

A Zomato-like food listing application built with a frontend UI and a mock backend API, fully containerized using Docker and orchestrated with Docker Compose.

---

## Tech Stack

- Frontend: Vite + React + TypeScript
- Backend: json-server (mock REST API)
- Web Server: Nginx
- Containerization: Docker
- Orchestration: Docker Compose

---

## Architecture

- Frontend runs inside an Nginx container
- Backend runs as a json-server container
- Docker Compose manages networking between services

Browser → Frontend (Nginx) → Backend (json-server)

---

## Services & Ports

| Service   | Port | Description |
|---------|------|-------------|
| Frontend | 8081 | UI application |
| Backend  | 3000 | Restaurants API |

---

## API Endpoint

GET /restaurants
http://localhost:3000/restaurants

---

## How to Run the Project

```bash
docker compose up --build -d
Access:

Frontend → http://localhost:8081

Backend API → http://localhost:3000/restaurants
