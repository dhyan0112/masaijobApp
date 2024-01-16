const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: String,
    postedAt: { type: Date, default: Date.now },
    city: String,
    location: String,
    role: String,
    level: String,
    contract: String,
    position: String,
    language: String,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
