const express=require('express')
const router=express.Router()
const con=require('../db')

router.get("/",(req, res)=>{
	con.query("SELECT id, firstName, surname, email FROM users ",(err,result)=>{
	if (err){
		res.json({err:err})
	}
		res.json(result);		

})
});
router.post("/login",(req, res)=>{
 const username=req.body.username;
 const password=req.body.password;

 con.query("SELECT id, firstName, surname, email FROM users WHERE email=? AND password=?",
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
router.post("/register",(req,result)=>{
	const firstName=req.body.name;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const password=req.body.password;

 con.query("INSERT INTO users (id, firstName, surname, email, password) VALUES(null,?,?,?,?)",
 	[firstName,lastname,email,password],(err,result)=>{
	console.log(err)
});
});

router.delete("/:id",(req, res)=>{
	con.query(`DELETE FROM users WHERE id=${req.params.id}`,(err,result)=>{
	if (err){
		res.json({err:err})
	}else{
      res.json({message:'Deleted successfully'});
  }
})
});

module.exports= router