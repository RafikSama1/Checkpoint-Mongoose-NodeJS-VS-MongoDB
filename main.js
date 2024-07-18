const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());

dotenv.config();

mongoose.connect(`mongodb//:${process.env.URL}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => console.log("server listening on: http://localhost:3000"));