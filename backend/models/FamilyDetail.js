const mongoose = require('mongoose');

const familyDetailSchema = new mongoose.Schema({
    primaryContact: {
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
        },
        email: {
            type: String,
            required: true
        },
        address: {
            street: String,
            city: String,
            state: String,
            zipCode: String,
            country: String
        }
    },
    alternateContact: {
        name: String,
        relationship: String,
        phone: String,
        email: String
    },
    visitingPreferences: {
        preferredDays: [String],
        preferredTime: String
    },
    financialResponsibility: {
        responsible: {
            type: Boolean,
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ['Self', 'Insurance', 'Medicare', 'Other'],
            required: true
        }
    },
    admission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admission',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('FamilyDetail', familyDetailSchema);
