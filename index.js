
const express  = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');

app.listen(port,function(err){
     
      if(err){
          console.log('error in running server on port',err);
      }
      console.log('Server running successfully on port',port);
});
