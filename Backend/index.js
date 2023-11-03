const express = require('express');
const app = express();
const fs=require('fs');
const multer = require('multer'); // Import multer for handling file uploads
const cors=require('cors');
const axios=require('axios');
const bodyParser=require("body-parser");
const FormData = require('form-data');
const mongoose = require('mongoose');
const Image = require('./models/Image'); // Import your Image model
const mongourl="mongodb+srv://carplate:1234@cluster0.hsb1zad.mongodb.net/iiotproject?retryWrites=true&w=majority"

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://cpn.onrender.com");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
app.use(cors());
// Middleware setup
// app.use(express.json()); // Parse JSON request bodies
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.static('public')); // Serve static files (e.g., images) from the 'public' directory

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null,  file.originalname)
  }
})

// Initialize multer middleware
const upload = multer({ storage:storage });

// Define the endpoint for image uploads using the upload middleware
app.post('/upload', upload.single('test'), async (req, res) => {
  try {
    
    const imageData=fs.readFileSync('./uploads/'+req.file.filename);

    const imagePath = './uploads/' + req.file.filename;

    // Send the image to your model API and get the car plate number
    const carPlateNumber = await sendImageToModel(imagePath);

    const newImage = new Image({
      ImageData: {
        data: imageData,
        contentType: 'image/jpg',
      },
      timestamp:Date.now(),

      carPlateNumber:carPlateNumber.toString(),
    });

    const savedImage = await newImage.save();
    
    console.log('Image is saved');
    //console.log(newImage.imageData);
    console.log(newImage.ImageData.data.length + " Bytes Received");

    return res.status(200).json({ message: 'File uploaded and saved to the database.' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: 'Error saving image to the database.' });
  }
});
async function sendImageToModel(imagePath) {
  // Define your model API endpoint
  const modelApiEndpoint = 'https://sole-one-antelope.ngrok-free.app/predict'; // Replace with your model API endpoint

  // Create a new FormData object
  const form = new FormData();
  form.append('image', fs.createReadStream(imagePath));

  try {
    // Send a POST request with the form data
    const response = await axios.post(modelApiEndpoint, form, {
      headers: form.getHeaders(),
    });

    if(response.data.result==null){
      return "12345";
    } 
    else{
      return response.data.result;
    }; // The response from the external API (a string, car plate number)
  } catch (error) {
    console.error('Error sending image to model API:', error);
    throw error; // Handle the error as needed
  }
}
app.get('/data', async (req, res) => {
  try {
    const data = await Image.find(); // Replace YourModel with your actual Mongoose model
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ error: 'Error fetching data.' });
  }
});



// Start the server
const port = 80;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




