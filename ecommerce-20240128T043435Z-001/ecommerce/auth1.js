const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vali.html'));
});

// Handle file upload
app.post('/upload', upload.single('certificate'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully: ' + file.originalname);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
