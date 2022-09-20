const express=require('express')
const router=express.Router()
const con=require('../db')

router.get("/",(req, res)=>{
	con.query("SELECT * FROM projects ",(err,result)=>{
	if (err){
		res.json({err:err})
	}
	if (result.length > 0) {
		res.json(result);		
	}else{
      res.json({message:'No project added'});
	}
})
});

router.delete("/:id",(req, res)=>{
	con.query(`DELETE FROM projects WHERE id=${req.params.id}`,(err,result)=>{
	if (err){
		res.json({err:err})
	}else{
      res.json({message:'Deleted successfully'});
  }
})
});


router.post("/",(req,res)=>{
	const client=req.body.client;
    const title=req.body.title;
    const payment=req.body.payment;
    const startAt=req.body.startAt;
    const submitDay=req.body.submitDay;
    const description=req.body.description;
 con.query(`SELECT id, name FROM clients WHERE name=? `,
 	[client],(err,result)=>{
	if (!result?.length > 0) {
		res.json({message:'Add this client is not in our list'});		
	}else{

 con.query("INSERT INTO projects (id, client, title, payment, startAt, submitDay, description) VALUES(null,?,?,?,?,?,?)",
 	[client,title,payment,startAt,submitDay,description],(err,result)=>{
 		if (true) {
 		console.log(err)
 		}
 		res.json(result);
});
}
});
});

module.exports= router