const express = require("express");
const { appendFileSync } = require("fs");
const app = express();
const path = require("path");


app.get("/", (req,res)=>{
      res.sendFile(path.join(__dirname, "/views/home.html"));
  })
app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))  
})  

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))  
})  

app.use(express.static("public"));

app.listen(3000, ()=>{
      console.log("servidor corriendo en puerto 3000");                  
})