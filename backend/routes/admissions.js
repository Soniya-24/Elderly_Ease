const express = require('express');
const router = express.Router();
const Admission = require('../models/Admission');
const FamilyDetail = require('../models/FamilyDetail');

// Get all admissions
router.get('/', async (req, res) => {
    try {
        const admissions = await Admission.find().populate('familyDetails');
        res.json(admissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single admission
router.get('/:id', async (req, res) => {
    try {
        const admission = await Admission.findById(req.params.id).populate('familyDetails');
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' });
        }
        res.json(admission);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create admission
router.post('/', async (req, res) => {
    const admission = new Admission({
        elderlyName: req.body.elderlyName,
        age: req.body.age,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        medicalConditions: req.body.medicalConditions,
        medications: req.body.medications,
        emergencyContact: req.body.emergencyContact,
        roomPreference: req.body.roomPreference,
        dietaryRestrictions: req.body.dietaryRestrictions,
        admissionDate: req.body.admissionDate
    });

    try {
        const newAdmission = await admission.save();
        res.status(201).json(newAdmission);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update admission
router.patch('/:id', async (req, res) => {
    try {
        const admission = await Admission.findById(req.params.id);
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' });
        }

        Object.keys(req.body).forEach(key => {
            admission[key] = req.body[key];
        });

        const updatedAdmission = await admission.save();
        res.json(updatedAdmission);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete admission
router.delete('/:id', async (req, res) => {
    try {
        const admission = await Admission.findById(req.params.id);
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' });
        }

        await FamilyDetail.deleteMany({ admission: req.params.id });
        await admission.remove();
        res.json({ message: 'Admission deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
