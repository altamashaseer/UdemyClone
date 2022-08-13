const express = require('express');
const app = express();
const port= process.env.PORT || 8000;
const path = require('path');

// console.log(__dirname);
const staticpath =path.join(__dirname,''); // no location as HTML is in parent only
// built in middleware
app.use(express.static(staticpath)); // only need to give folder


app.get("/", (req,res)=>{
    res.send("hello MF");
})

app.listen(port, ()=>{
    console.log(`Application running at port ${port}`);
})