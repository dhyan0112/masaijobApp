const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/masaijob', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
