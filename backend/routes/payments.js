const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Admission = require('../models/Admission');

// Create a new payment
router.post('/', async (req, res) => {
    try {
        const { admissionId, amount, paymentMethod } = req.body;

        // Verify admission exists
        const admission = await Admission.findById(admissionId);
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' });
        }

        // Create payment record
        const payment = new Payment({
            admission: admissionId,
            amount,
            paymentMethod,
            status: 'completed', // In a real app, this would be determined by payment gateway
            transactionId: 'TXN' + Date.now() // In a real app, this would come from payment gateway
        });

        await payment.save();

        // Update admission status
        admission.paymentStatus = 'completed';
        admission.paymentDate = new Date();
        await admission.save();

        res.status(201).json(payment);
    } catch (error) {
        console.error('Payment error:', error);
        res.status(500).json({ message: 'Failed to process payment' });
    }
});

// Get payment by admission ID
router.get('/admission/:admissionId', async (req, res) => {
    try {
        const payment = await Payment.findOne({ admission: req.params.admissionId });
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payment' });
    }
});

module.exports = router;
