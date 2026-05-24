# PENAM | Premium South Indian Culinary Heritage Website

PENAM is a stunning, premium, culturally rich, and fully responsive South Indian restaurant website built on the **MERN Stack (MongoDB, Express.js, React, Node.js)**. Designed with meticulous attention to detail, the UI features traditional motifs, smooth micro-animations, temple bell separators, and a warm Sandalwood and Gold palette that reflects the authentic village soul of South India.

---

## 🪔 Tech Stack

### Frontend
- **React.js** (Vite-powered, client scaffolding)
- **Tailwind CSS v4** (Modern CSS-first styling engine)
- **Framer Motion** (Cinematic page-loading, scroll reveals, and floating brass lanterns)
- **i18next** (Instant English / Telugu translation toggle)
- **Axios** (HTTP Client integration)
- **Canvas Confetti** (Celebratory effects for successful bookings)

### Backend
- **Node.js** & **Express.js** (API Framework)
- **MongoDB** & **Mongoose** (Data Persistence)
- **dotenv** & **CORS** (Configurations & Security)

---

## 🎨 Color Palette & Aesthetic Tokens

The design strictly avoids dark themes, neon colors, glassmorphism, or modern tech startup SaaS styles, in favor of warm, inviting, traditional Indian hues:
- **Sandalwood Beige** (`#FAF7F0`): Background canvas, soothing clay/wood interior look.
- **Temple Gold** (`#D4AF37`): Primary brand accents, glowing diya details, and dividers.
- **Off-white Cream** (`#FAF9F6`): Soft contrasts and card sheets.
- **Turmeric Yellow** (`#EAA812`): Vibrant focus triggers.
- **Muted Terracotta** (`#C05C46`): Warm brick shades.
- **Banana Leaf Green** (`#3B7A57`): Lush green focus icons and visuals.
- **Copper Accents** (`#B87333`): Price badges resembling copper pans.
- **Warm Wood Tones** (`#5C4033`): Primary readable text and footers.

---

## 📁 Directory Structure

```
Penam/
├── backend/                  # Node.js + Express API
│   ├── config/               # DB connections
│   ├── models/               # Mongoose schemas (Reservation)
│   ├── routes/               # API endpoints
│   ├── server.js             # Entry point
│   └── .env                  # Configuration keys
├── frontend/                 # React client
│   ├── public/assets/        # Custom generated premium interior backdrop
│   ├── src/
│   │   ├── components/       # Reusable components (Navbar, Footer, Separator, Loader)
│   │   ├── sections/         # Homepage visual grids (Hero, Story, Menu, Reservation, Gallery)
│   │   ├── i18n/             # Translations config (en, te)
│   │   ├── App.jsx           # Coordinate layouts & loader timelines
│   │   ├── index.css         # Google fonts & Kolam patterns
│   │   └── main.jsx          # Mount react application
│   ├── tailwind.config.js
│   └── postcss.config.js
├── package.json              # Root script coordinator
└── README.md
```

---

## 🚀 Installation & Running

Ensure you have **Node.js** and **MongoDB** running on your local machine.

### 1. Root Installation
Run this command from the root `Penam/` directory to automatically download dependencies for the root, backend, and frontend directories:
```bash
npm run install-all
```

### 2. Development Execution
Launch both the Express backend (`http://localhost:5000`) and Vite frontend (`http://localhost:5173`) concurrently with one simple command:
```bash
npm run dev
```

---

## 🔌 API Endpoints

### Table Reservations

#### Book a Table
- **URL**: `/api/reservations`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "name": "Jashvant",
    "phone": "+91 9876543210",
    "guests": 4,
    "date": "2026-05-30",
    "time": "19:30",
    "specialRequests": "Near the traditional wooden pillars, window seat preferred"
  }
  ```
- **Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Reservation booked successfully! Looking forward to your visit.",
    "data": { ... }
  }
  ```

#### Fetch Reservations (Dev Helper)
- **URL**: `/api/reservations`
- **Method**: `GET`
- **Response (200 OK)**: Contains array list of current database entries sorted by date/time.
