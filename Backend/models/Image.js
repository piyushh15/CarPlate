const mongoose = require('mongoose');

// Define a schema for your image data
const imageSchema = new mongoose.Schema({
  name: String,
  ImageData: {
    data: String,
    contentType: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  carPlateNumber: String,
});


// Create a Mongoose model based on the schema
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;

