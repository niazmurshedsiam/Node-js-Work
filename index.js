const express = require('express');
const app = express();
const cors = require('cors');
const users = ["Abir","Bulbul","Chapman","Dulal","Fakrul"];
app.use(cors());
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
  app.get('/user/:id',(req,res)=>{
      const id = req.params.id;
      console.log(req.query.sort);
      const name = users[id];
      res.send({id,name});

  })
  
app.listen(4000,()=> console.log('Listenting is port 4000'));

