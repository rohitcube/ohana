// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  // Basic Information
  firstName: {
    type: String,
    required: true,
    trim: true  // Removes whitespace from beginning and end
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    maxLength: 500,  // Limits bio to 500 characters
    default: ''  // Empty string if not provided
  },
  interests: [{
    type: String,
    trim: true
  }],
  country: {
    type: String,
    required: true,
    trim: true
  },
  picture: {
    type: String,  // URL to the image
    default: 'default-profile.jpg'  // Default image if none provided
  },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'  // This allows us to populate events related to the profile
  }],
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  // This adds virtual properties when converting to JSON
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual property for full name
profileSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Update the updatedAt timestamp before saving
profileSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Instance method to add an event
profileSchema.methods.addEvent = function(eventId) {
  if (!this.events.includes(eventId)) {
    this.events.push(eventId);
  }
  return this.save();
};

// Static method to find profiles by country
profileSchema.statics.findByCountry = function(country) {
  return this.find({ country: new RegExp(country, 'i') });
};

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;