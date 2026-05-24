const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// @desc    Create a new table reservation
// @route   POST /api/reservations
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, phone, guests, date, time, specialRequests } = req.req ? req.req.body : req.body;
    
    // Basic validation
    if (!name || !phone || !guests || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, phone, guests, date, time.'
      });
    }

    // Parse date
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid date format provided.'
      });
    }

    // Save to MongoDB
    const reservation = await Reservation.create({
      name,
      phone,
      guests: parseInt(guests, 10),
      date: parsedDate,
      time,
      specialRequests
    });

    // SIMULATED EMAIL & SMS NOTIFICATION SUPPORT
    console.log(`\n\x1b[36m==================================================`);
    console.log(`✉️ [SIMULATED SMS/EMAIL NOTIFICATION SENT]`);
    console.log(`To: ${name} (${phone})`);
    console.log(`Subject: PENAM Table Reservation Confirmed! 🪔`);
    console.log(`Details:`);
    console.log(`  - Guests: ${guests} members`);
    console.log(`  - Date  : ${parsedDate.toDateString()}`);
    console.log(`  - Time  : ${time}`);
    if (specialRequests) console.log(`  - Notes : "${specialRequests}"`);
    console.log(`We look forward to serving you with authentic South Indian warmth!`);
    console.log(`==================================================\x1b[0m\n`);

    return res.status(201).json({
      success: true,
      message: 'Reservation booked successfully! Looking forward to your visit.',
      data: reservation
    });

  } catch (error) {
    console.error(`Error creating reservation: ${error.message}`);
    
    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error occurred while booking reservation. Please try again later.'
    });
  }
});

// @desc    Get all reservations (for internal validation / convenience)
// @route   GET /api/reservations
// @access  Public (for demo/dev purposes)
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1, time: 1 });
    return res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations
    });
  } catch (error) {
    console.error(`Error retrieving reservations: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Server error occurred while retrieving reservations.'
    });
  }
});

module.exports = router;
