const jobsService = require('./jobs.service');
const authService = require('../common/auth.service');
const express = require('express');
const router = express.Router();

class jobsController {
    constructor(app) {
      router.get('/', jobsService.getJobs);
      router.post('/', jobsService.addJobs);
      app.use('/api/v1/jobs', router);
    }
 }
module.exports = jobsController;