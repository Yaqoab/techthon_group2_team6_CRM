const mysql=require('mysql');
 require('dotenv').config();

const con=mysql.createConnection({
	user:process.env.USER,
	host:process.env.HOST,
	password:process.env.DB_PASSWORD,
	database:process.env.DATABASE
});
con.connect((err)=>{
	if (err) throw err;
	console.log('connected')
});

module.exports= con