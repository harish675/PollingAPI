
const express  = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
//set the  view engine
app.set('view engine','ejs');
app.set('views','./views');
//set up routes 
app.use('/',require('./routes/index'));


app.listen(port,function(err){
     
      if(err){
          console.log('error in running server on port',err);
      }
      console.log('Server running successfully on port',port);
});
