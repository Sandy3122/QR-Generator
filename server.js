const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000; // Use port 3000 by default, or specify a different port with an environment variable

// Serve static files from the "public" directory (where your HTML file is located)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
