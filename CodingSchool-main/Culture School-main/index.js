const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const feedBackDiv = "Your dynamic content"; // Replace with your actual dynamic content
  res.send(`<html><body><div class="feedBackDiv">${feedBackDiv}</div></body></html>`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
