const express=require("express");
require('dotenv').config({ path: __dirname + '/.env' });
const path =require("path");
const cors=require("cors");
const database = require("./dbPosgresql.js");
const cookieParser = require("cookie-parser");


const port="3000"

const app =express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:3000", credentials: true}));
app.use(express.static(path.join(__dirname, "frontend")));


app.get("/", (req,res) => {
    
    res.status(200).send("richiesta successo")

});




app.listen(port);
console.log(`Server online on port ${port}`);