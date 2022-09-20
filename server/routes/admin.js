const express=require('express')
const router=express.Router()
const con=require('../db')

router.post("/",(req, res)=>{
 const username=req.body.username;
 const password=req.body.password;

 con.query("SELECT id, userName FROM admin WHERE userName=? AND password=?",
 	[username,password],(err,result)=>{
	if (err){
		res.json({err:err})
	}
	if (result.length > 0) {
		res.json(result);		
	}else{
      res.json({message:'username/password is incorrect'});
	}

});
});

module.exports= router