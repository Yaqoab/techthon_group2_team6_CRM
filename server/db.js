const mysql=require('mysql');
 require('dotenv').config();

const con=mysql.createConnection({
	user:"root",
	host:"localhost",
	password:process.env.DB_PASSWORD,
	database:'mydatabase'
});
con.connect((err)=>{
	if (err) throw err;
	console.log('connected')
});

module.exports= con