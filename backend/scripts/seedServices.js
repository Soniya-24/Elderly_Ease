const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('../models/Service');

const services = [
  {
    title: '24/7 Medical Care',
    description: 'Round-the-clock medical supervision with dedicated healthcare professionals.',
    icon: 'FaHeartbeat',
    details: {
      features: [
        'Regular health check-ups and monitoring',
        'Medication management and administration',
        'Emergency response system',
        'Coordination with specialists',
        'Health records maintenance',
        'Regular vital signs monitoring',
        'First aid facilities',
        'Ambulance service on call'
      ],
      availability: '24/7',
      location: 'Main Building, Medical Wing'
    },
    slug: 'medical-care'
  },
  {
    title: 'Comfortable Accommodation',
    description: 'Well-furnished rooms designed for comfort and safety.',
    icon: 'FaBed',
    details: {
      features: [
        'Single and shared room options',
        'Attached bathrooms with safety features',
        'Climate-controlled environment',
        'Regular housekeeping services',
        'Comfortable beds with orthopedic mattresses',
        'Emergency call buttons',
        '24/7 power backup',
        'Wheelchair accessibility'
      ],
      availability: '24/7',
      location: 'Residential Wing'
    },
    slug: 'accommodation'
  },
  {
    title: 'Nutritious Meals',
    description: 'Healthy and tasty meals prepared under dietary supervision.',
    icon: 'FaUtensils',
    details: {
      features: [
        'Three nutritious meals daily',
        'Special diet accommodation',
        'Fresh and quality ingredients',
        'Dietitian consultation',
        'Flexible meal timings',
        'Healthy snacks available',
        'Festival special menus',
        'Hydration monitoring'
      ],
      availability: 'Breakfast: 7-9 AM, Lunch: 12-2 PM, Dinner: 7-9 PM',
      location: 'Dining Hall'
    },
    slug: 'meals'
  },
  {
    title: 'Personal Care',
    description: 'Compassionate assistance with daily activities.',
    icon: 'FaHandHoldingHeart',
    details: {
      features: [
        'Bathing and grooming assistance',
        'Dressing assistance',
        'Mobility support',
        'Medication reminders',
        'Laundry services',
        'Personal hygiene maintenance',
        'Regular exercise assistance',
        'Emotional support'
      ],
      availability: '6 AM - 10 PM',
      location: 'Throughout Facility'
    },
    slug: 'personal-care'
  },
  {
    title: 'Rehabilitation Services',
    description: 'Professional rehabilitation programs for better mobility.',
    icon: 'FaUserMd',
    details: {
      features: [
        'Physical therapy',
        'Occupational therapy',
        'Speech therapy',
        'Exercise programs',
        'Balance training',
        'Pain management',
        'Post-surgery rehabilitation',
        'Progress monitoring'
      ],
      availability: 'Mon-Sat: 9 AM - 5 PM',
      location: 'Rehabilitation Center'
    },
    slug: 'rehabilitation'
  },
  {
    title: 'Recreational Activities',
    description: 'Engaging activities for mental and social well-being.',
    icon: 'FaCalendarCheck',
    details: {
      features: [
        'Daily group activities',
        'Arts and crafts sessions',
        'Music and dance programs',
        'Yoga and meditation',
        'Festival celebrations',
        'Board games and puzzles',
        'Movie screenings',
        'Garden activities'
      ],
      availability: 'Daily: 10 AM - 6 PM',
      location: 'Activity Center & Gardens'
    },
    slug: 'activities'
  }
];

async function seedServices() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('Cleared existing services');

    // Insert new services
    const result = await Service.insertMany(services);
    console.log(`Added ${result.length} services`);

    console.log('Services seeded successfully');
  } catch (error) {
    console.error('Error seeding services:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedServices();
