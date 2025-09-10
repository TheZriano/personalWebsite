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

//*ROUTES FRONTEND
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend/homepage.html"))
});

app.get("/contacts", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend/contacts.html"))
});

app.get("/projects", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend/portfolio.html"))
});

//*ROUTES API
app.get("/api/projects", async (req,res) => {
    try{
        const projects= await database.getProjects();
        res.json(projects);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});


app.listen(port);
console.log(`Server online on port ${port}`);