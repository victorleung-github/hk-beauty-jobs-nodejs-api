class authService {
    async loginRequired(req, res, next) {
      try {
        if(req.authUser){
            next();
        }else{
            res.status(401).json({message:"Unauthorized user!"});
        }
      }
      catch (error) {
         console.log(error);
      }
    }


}
module.exports = new authService();