const jwt = require("jsonwebtoken");

class Module {
    constructor(app) {
       this.app = app;

       this.app.use(function(req, res, next){
         if(req && req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
           jwt.verify(req.headers.authorization.split(' ')[1],'JWTSecret', function(err, decode){
             if(err){
               req.authUser = undefined;
             }else{
               //console.log(req.cookies);
               console.log(decode);
               req.authUser = decode;
             } 
             console.log(err);
             next();
           });

         }else{
           req.authUser = undefined;
           next();
         }
       });

    }
   init() {
    const jobsController = require('./jobs/jobs.controller');
    new jobsController(this.app);
   }
  }
  module.exports = Module;