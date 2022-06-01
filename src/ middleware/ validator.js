
function validator(req, res, next) {
    let regx=/^[a-zA-Z]+$/
         if(req.query.name==null)
        errorHandler();
        if(req.query.name=="")
        req.query.name="user"
        if(!regx.test( req.query.name))
        req.query.name="wrong Name"
         next();
        
         
    
 }
 
 module.exports = validator;