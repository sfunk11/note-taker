const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
 
require("./routing/html-routes")(app);
require("./routing/api-routes")(app);

let PORT = process.env.PORT || 8080;

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 


app.listen(PORT, function(){
console.log ("App listening on PORT: "+ PORT);
});