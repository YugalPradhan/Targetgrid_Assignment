require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const MONGO_URI=process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Mongodb connected successfully");
}
).catch((err)=>{
    console.log("Got an error while connecting to Mongodb ",err);
});

app.use('/customer',require('./routes/customer'))
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
