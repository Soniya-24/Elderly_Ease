const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    elderlyName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    medicalConditions: {
        type: [String],
        default: []
    },
    medications: {
        type: [String],
        default: []
    },
    emergencyContact: {
        name: {
            type: String,
            required: true
        },
        relationship: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    roomPreference: {
        type: String,
        enum: ['Private', 'Semi-Private', 'Shared'],
        required: true
    },
    dietaryRestrictions: {
        type: [String],
        default: []
    },
    admissionDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    familyDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FamilyDetail'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Admission', admissionSchema);
