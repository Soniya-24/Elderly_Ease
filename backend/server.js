require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const admissionRoutes = require('./routes/admissions');
const familyDetailRoutes = require('./routes/familyDetails');
const serviceRoutes = require('./routes/services');
const paymentsRoutes = require('./routes/payments');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple in-memory data store
const services = [
  {
    _id: '1',
    title: '24/7 Medical Care',
    description: 'Round-the-clock medical supervision with regular health check-ups, medication management, and emergency response services.',
    icon: 'FaHeartbeat',
    isAvailable: true,
    details: {
      features: [
        'Regular health check-ups and monitoring',
        'Medication management and administration',
        'Emergency response protocols',
        'Vital signs monitoring',
        'Chronic disease management'
      ],
      availability: '24/7',
      staffing: 'Qualified medical professionals'
    }
  },
  {
    _id: '2',
    title: 'Comfortable Accommodation',
    description: 'Well-furnished rooms with proper ventilation, comfortable beds, and essential amenities to ensure a pleasant stay.',
    icon: 'FaBed',
    isAvailable: true,
    details: {
      features: [
        'Private and semi-private rooms',
        'Climate control systems',
        'Electric beds with safety rails',
        'Emergency call buttons',
        'Personal storage space'
      ],
      amenities: 'TV, Wi-Fi, attached bathroom',
      maintenance: 'Daily housekeeping'
    }
  },
  {
    _id: '3',
    title: 'Nutritious Meals',
    description: 'Balanced and nutritious meals prepared under dietary supervision, catering to individual health requirements.',
    icon: 'FaUtensils',
    isAvailable: true,
    details: {
      features: [
        'Customized meal plans',
        'Special dietary accommodations',
        'Fresh, locally sourced ingredients',
        'Multiple menu options',
        'Nutritionist consultation'
      ],
      mealTimes: 'Breakfast, Lunch, Dinner, and Snacks',
      specialDiets: 'Diabetic, Low-sodium, Vegetarian'
    }
  },
  {
    _id: '4',
    title: 'Personal Care',
    description: 'Compassionate assistance with daily activities, personal hygiene, and grooming to maintain dignity and comfort.',
    icon: 'FaHandHoldingHeart',
    isAvailable: true,
    details: {
      features: [
        'Bathing and grooming assistance',
        'Dressing assistance',
        'Mobility support',
        'Toileting assistance',
        'Personal hygiene maintenance'
      ],
      schedule: 'Customized to resident needs',
      staff: 'Trained caregivers'
    }
  },
  {
    _id: '5',
    title: 'Rehabilitation Services',
    description: 'Professional physiotherapy and rehabilitation programs tailored to individual needs for maintaining mobility and independence.',
    icon: 'FaUserMd',
    isAvailable: true,
    details: {
      features: [
        'Physical therapy',
        'Occupational therapy',
        'Speech therapy',
        'Post-surgery rehabilitation',
        'Strength training'
      ],
      schedule: 'By appointment',
      specialists: 'Licensed therapists'
    }
  },
  {
    _id: '6',
    title: 'Recreational Activities',
    description: 'Engaging social and recreational activities including yoga, meditation, games, and cultural events for mental well-being.',
    icon: 'FaCalendarCheck',
    isAvailable: true,
    details: {
      features: [
        'Daily group activities',
        'Arts and crafts sessions',
        'Music therapy',
        'Garden activities',
        'Festival celebrations'
      ],
      schedule: 'Weekly activity calendar',
      location: 'Activity room and garden'
    }
  },
  {
    _id: '7',
    title: 'Emergency Response',
    description: '24/7 emergency response system with trained staff and quick access to medical facilities when needed.',
    icon: 'FaAmbulance',
    isAvailable: true,
    details: {
      features: [
        'Emergency call system',
        'Rapid response team',
        'Hospital transfer arrangements',
        'First aid equipment',
        'Emergency protocols'
      ],
      response: 'Immediate',
      support: '24/7 medical staff'
    }
  },
  {
    _id: '8',
    title: 'Family Support',
    description: 'Regular family visits, video calls, and counseling services to maintain strong family connections.',
    icon: 'FaUsers',
    isAvailable: true,
    details: {
      features: [
        'Flexible visiting hours',
        'Video call facilities',
        'Family counseling',
        'Regular updates',
        'Family events'
      ],
      visitingHours: '9 AM - 8 PM',
      communication: 'Daily updates available'
    }
  },
  {
    _id: '9',
    title: 'Spiritual Care',
    description: 'Access to prayer rooms, religious services, and spiritual guidance respecting all faiths and beliefs.',
    icon: 'FaPray',
    isAvailable: true,
    details: {
      features: [
        'Multi-faith prayer room',
        'Religious service arrangements',
        'Spiritual counseling',
        'Meditation sessions',
        'Festival celebrations'
      ],
      schedule: 'Daily prayer times',
      support: 'Spiritual counselors'
    }
  }
];

// Routes
app.use('/api/admissions', admissionRoutes);
app.use('/api/family-details', familyDetailRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/payments', paymentsRoutes);

// Services endpoints (temporary, move to routes later)
app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/services/:id', (req, res) => {
  const service = services.find(s => s._id === req.params.id);
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json(service);
});

// Test endpoint
app.get('/', (req, res) => {
  res.send('Healthcare Facility API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
