const express = require('express');
const router = express.Router();
const FamilyDetail = require('../models/FamilyDetail');
const Admission = require('../models/Admission');

// Get all family details
router.get('/', async (req, res) => {
    try {
        const familyDetails = await FamilyDetail.find().populate('admission');
        res.json(familyDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single family detail
router.get('/:id', async (req, res) => {
    try {
        const familyDetail = await FamilyDetail.findById(req.params.id).populate('admission');
        if (!familyDetail) {
            return res.status(404).json({ message: 'Family details not found' });
        }
        res.json(familyDetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create family detail
router.post('/', async (req, res) => {
    const familyDetail = new FamilyDetail({
        primaryContact: req.body.primaryContact,
        alternateContact: req.body.alternateContact,
        visitingPreferences: req.body.visitingPreferences,
        financialResponsibility: req.body.financialResponsibility,
        admission: req.body.admissionId
    });

    try {
        const newFamilyDetail = await familyDetail.save();
        
        // Update the admission with the family details reference
        await Admission.findByIdAndUpdate(
            req.body.admissionId,
            { familyDetails: newFamilyDetail._id }
        );

        res.status(201).json(newFamilyDetail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update family detail
router.patch('/:id', async (req, res) => {
    try {
        const familyDetail = await FamilyDetail.findById(req.params.id);
        if (!familyDetail) {
            return res.status(404).json({ message: 'Family details not found' });
        }

        Object.keys(req.body).forEach(key => {
            if (key !== 'admission') { // Prevent changing the admission reference
                familyDetail[key] = req.body[key];
            }
        });

        const updatedFamilyDetail = await familyDetail.save();
        res.json(updatedFamilyDetail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete family detail
router.delete('/:id', async (req, res) => {
    try {
        const familyDetail = await FamilyDetail.findById(req.params.id);
        if (!familyDetail) {
            return res.status(404).json({ message: 'Family details not found' });
        }

        // Remove reference from admission
        await Admission.findByIdAndUpdate(
            familyDetail.admission,
            { $unset: { familyDetails: 1 } }
        );

        await familyDetail.remove();
        res.json({ message: 'Family details deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
