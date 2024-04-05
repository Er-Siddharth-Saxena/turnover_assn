const express =require('express');
const dotenv=require('dotenv').config();

//it is a package file which loads environment variables configure
// our nodejs application.
const cors=require('cors');
// it is a security feature  that allows us 
// to control who can access  our API from different origins(domains).

const { application } = require('express');


const port =8000;
const app=express();
app.use('/',require(`./Routes/AuthRoutes`));

// app.get('/',(req,res)=>{
//     console.log('first');
// })

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
})

