const Job = require('../models/jobModel');

exports.postJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getJobs = async (req, res) => {
    try {
        let { role, sort, search, page } = req.query;
        role = role || '';
        sort = sort || 'desc';
        search = search || '';
        page = parseInt(page) || 1;
        const pageSize = 10;

        const filter = {
            role: role !== 'All' ? role : { $exists: true },
            language: { $regex: new RegExp(search, 'i') }
        };

        const jobs = await Job.find(filter)
            .sort({ postedAt: sort === 'desc' ? -1 : 1 })
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
