const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Please provide a contact phone number'],
    trim: true
  },
  guests: {
    type: Number,
    required: [true, 'Please specify the number of guests'],
    min: [1, 'At least 1 guest must be selected'],
    max: [20, 'For tables larger than 20 guests, please contact us directly']
  },
  date: {
    type: Date,
    required: [true, 'Please select a date']
  },
  time: {
    type: String,
    required: [true, 'Please select a dining time']
  },
  specialRequests: {
    type: String,
    trim: true,
    maxlength: [500, 'Special requests cannot exceed 500 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
