const express = require('express');
const app = express();
app.get('/', function (req, res) {
    const fruits ={
        product:'apple',
        price:300

    }
    res.send(fruits);
  })
  app.get('/fruits/apple',(req,res)=>{
       res.send({fruits:'apple',quantity:100,price:10000})
  })
  
app.listen(4000,()=> console.log('Listenting is port 4000'));

