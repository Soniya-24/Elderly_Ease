require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('../models/Service');

const services = [
  {
    title: '24/7 Medical Care',
    description: 'Round-the-clock medical supervision with regular health check-ups, medication management, and emergency response services.',
    icon: 'FaHeartbeat',
    isAvailable: true
  },
  {
    title: 'Comfortable Accommodation',
    description: 'Well-furnished rooms with proper ventilation, comfortable beds, and essential amenities to ensure a pleasant stay.',
    icon: 'FaBed',
    isAvailable: true
  },
  {
    title: 'Nutritious Meals',
    description: 'Balanced and nutritious meals prepared under dietary supervision, catering to individual health requirements.',
    icon: 'FaUtensils',
    isAvailable: true
  },
  {
    title: 'Personal Care',
    description: 'Assistance with daily activities, personal hygiene, and grooming to maintain dignity and comfort.',
    icon: 'FaHandHoldingHeart',
    isAvailable: true
  },
  {
    title: 'Rehabilitation Services',
    description: 'Physiotherapy and rehabilitation programs tailored to individual needs for maintaining mobility and independence.',
    icon: 'FaUserMd',
    isAvailable: true
  },
  {
    title: 'Recreational Activities',
    description: 'Regular social and recreational activities including yoga, meditation, games, and cultural events.',
    icon: 'FaCalendarCheck',
    isAvailable: true
  }
];

async function initializeDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('Cleared existing services');

    // Insert new services
    await Service.insertMany(services);
    console.log('Added sample services');

    console.log('Database initialization complete');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    mongoose.disconnect();
  }
}

initializeDatabase();
