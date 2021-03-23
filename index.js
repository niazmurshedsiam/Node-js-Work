const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Thank You')
  })
  
app.listen(3000,()=> console.log('Listenting is port 3000'));

