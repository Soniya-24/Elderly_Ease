const express = require('express');
const router = express.Router();

// Get visiting hours and information
router.get('/', (req, res) => {
  const visitingInfo = {
    regularHours: {
      weekdays: '9:00 AM - 6:00 PM',
      weekends: '10:00 AM - 4:00 PM',
    },
    emergencyHours: '24/7',
    location: {
      address: '123 Healthcare Street, Medical District',
      city: 'Your City',
      state: 'Your State',
      zipCode: '12345',
      coordinates: {
        lat: 0, // Replace with actual coordinates
        lng: 0,
      },
    },
    contactInfo: {
      phone: '+1 (555) 123-4567',
      email: 'info@healthcarefacility.com',
    },
    guidelines: [
      'Please arrive 15 minutes before your appointment',
      'Bring valid ID and insurance information',
      'Wear a mask inside the facility',
      'Follow social distancing guidelines',
    ],
  };

  res.json(visitingInfo);
});

module.exports = router;
