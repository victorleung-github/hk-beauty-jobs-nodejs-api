class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const jobsController = require('./jobs/jobs.controller');
    new jobsController(this.app);
   }
  }
  module.exports = Module;