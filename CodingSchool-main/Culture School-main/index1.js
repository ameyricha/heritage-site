const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.get('/', (req, res) => {
  const feedBackDiv = "Your dynamic content"; // Replace with your actual dynamic content
  res.send(`<html><body><div class="feedBackDiv">${feedBackDiv}</div></body></html>`);
});

const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/UserDataDB")
TouchEvent( ()=>{
   console.log("app database conn")
}).catch( (e)=>{
  console.log(e)
  console.log("data connected unsuccess")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
