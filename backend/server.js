const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const reservationRoutes = require('./routes/reservationRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://127.0.0.1:5173',
    'https://penam.onrender.com'
  ],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets if necessary
app.use(express.json());

// Routes
app.use('/api/reservations', reservationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'PENAM Backend API is active and running',
    timestamp: new Date()
  });
});

// Serve Static Assets in Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder to serve compiled React frontend assets
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html'));
  });
} else {
  // Root fallback route in development
  app.get('/', (req, res) => {
    res.send('Welcome to PENAM South Indian Restaurant MERN Backend API');
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'An internal server error occurred.'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n\x1b[35m==================================================`);
  console.log(`🪔 [PENAM SERVER RUNNING ON PORT]: ${PORT}`);
  console.log(`🔗 [API Health Check]: http://localhost:${PORT}/api/health`);
  console.log(`==================================================\x1b[0m\n`);
});
