const express = require("express");
const app = express();
const port = 8000;

app.get("/api/test",(req,res)=>{
    //take in request, send out response
    console.log("hey it's the function here!");

    res.json({message:"hey i'm respondin here!", faveNums:[4,8,15,16,23,42]});
})

app.get("/api/repeater/:word", (req,res)=>{
    res.json({repeat: `your word was: ${req.params.word}`})
})

app.listen(port, ()=>console.log(`running on port ${port} is a new way I like to be!!!!`));