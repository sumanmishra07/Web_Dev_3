const express=require("express");
const studentRoutes=require("./routes/studentRoutes");

const students=require("./data/studentData");
const app=express();
const PORT=3000

app.use(express.json()); //it handles the json data coming from the client//encode

app.use("api/students",studentRoutes);

app.listen(PORT,()=>console.log("server is running on port 3000"));
