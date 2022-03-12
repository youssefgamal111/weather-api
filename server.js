
let projectData = {};

const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
const cors = require('cors');
// Cors for cross origin allowance
app.use(cors());
app.use(express.static('website'));
const port=8000;
app.listen(port,listening);
function listening(){
    console.log("serverrunning");
    console.log(`running on local host: ${port} `);
};
//handeling the  data sending by the browser
app.post('/sendData',function(request,response){

    projectData=request.body;
    response.send(projectData);
});
//handeling the browser data request
app.get('/update',function(request,response){

   
    response.send(projectData);
});