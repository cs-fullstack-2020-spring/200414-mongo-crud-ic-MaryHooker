//200414 Mongo CRUD IC

//entry point
let express = require('express');
let app = express();

//port number
let portNumber = 2112;

//listen on port
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})
