const express=require('express');
const path = require('path');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
 require('dotenv').config();

const projectsRoute=require('./routes/projects')
const userRoute=require('./routes/user')
const clientRoute=require('./routes/clients')
const adminRoute=require('./routes/admin')
const PORT= process.env.PORT ||3001;
app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../crmweb/build')));
app.use('/api/user', userRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/clients', clientRoute)
app.use('/api/admin', adminRoute)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../crmweb/build', 'index.html'));
});

app.listen(PORT,()=>{
   console.log(`node server is listining to ${PORT}`);
});





