const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
  try {
    console.log('GET /api/services - Fetching services');
    const services = await Service.find({ isAvailable: true });
    console.log('Services found:', services);
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Error fetching services', error: error.message });
  }
});

// Get a single service by slug
router.get('/:slug', async (req, res) => {
  try {
    console.log(`GET /api/services/${req.params.slug} - Fetching service`);
    const service = await Service.findOne({ slug: req.params.slug, isAvailable: true });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    console.log('Service found:', service);
    res.json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({ message: 'Error fetching service', error: error.message });
  }
});

// Add a new service (you might want to add authentication for this)
router.post('/', async (req, res) => {
  try {
    console.log('POST /api/services - Creating new service');
    const service = new Service(req.body);
    await service.save();
    console.log('Service created:', service);
    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ message: 'Error creating service', error: error.message });
  }
});

// Update a service
router.patch('/:id', async (req, res) => {
  try {
    console.log(`PATCH /api/services/${req.params.id} - Updating service`);
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    console.log('Service updated:', service);
    res.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: 'Error updating service', error: error.message });
  }
});

module.exports = router;
