const express=require('express')
const router=express.Router()
const con=require('../db')

router.get("/",(req, res)=>{
	con.query("SELECT * FROM clients ",(err,result)=>{
	if (err){
		res.json({err:err})
	}
		res.json(result);		

})
});
router.post("/",(req,res)=>{
	const name=req.body.name;
    const email=req.body.email;
    const country=req.body.country;
    const state=req.body.state;
 con.query(`SELECT id, email FROM clients WHERE email=? `,
 	[email],(err,result)=>{
	if (result?.length > 0) {
		res.json({message:'this client already exist'});		
	}else{
      con.query("INSERT INTO clients (id, name, email, country, state) VALUES(null,?,?,?,?)",
 	[name,email,country,state],(err,result)=>{
 		if (true) {
 		console.log(err)
 		}
 		res.json(result);
});
	}

});
});

router.delete("/:id",(req, res)=>{
	con.query(`DELETE FROM clients WHERE id=${req.params.id}`,(err,result)=>{
	if (err){
		res.json({err:err})
	}else{
      res.json({message:'Deleted successfully'});
  }
})
});

module.exports= router