const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  details: {
    type: Object,
    required: true,
    default: {
      features: [],
      availability: '24/7',
      location: 'Main Building'
    }
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

// Create slug from title before saving
serviceSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  next();
});

module.exports = mongoose.model('Service', serviceSchema);
