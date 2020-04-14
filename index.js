//200414 Mongo CRUD IC

//entry point
let express = require('express');
let app = express();

//port number
let portNumber = 2112;

//import json middleware
app.use(express.json());

//import route
let api = require('./routes/api')

//mount route
app.use('/api',api);

//listen on port
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})

app.get('/test',(req,res)=>{
    res.send(`Loud and Clear`);
})
