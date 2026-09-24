const express=require("express");
const morgan=require("morgan");
const app=express();
const PORT=3000

// MiddleWare
// const logMiddleware=(req,res,next)=>{
//     req.data="Hello from middleware";
//     console.log("Request url:", req.url,"Method:", req.method);
//     next();
// };

const apiMiddleware=(req,res,next)=>{
    const API_KEY=req.query.API_KEY;
    if(API_KEY!=="1234"){
        res.send("API KEY is not valid");
    }
    console.log("authenthicated")
    next();
}

//  app.use(logMiddleware);
//  global middleware
// app.use(apiMiddleware);

app.get("/",(req,res)=>{
    console.log("Request data:",req.data)
    console.log("Homepage")
    res.send("Hello from server")
})

app.get("/weather-data",apiMiddleware,(req,res)=>{
    console.log("Weather Data")
    res.json({
        city:"New Delhi",
        weather:"Sunny",
        temp:32
    }) 
})

app.listen(PORT,()=>console.log("server is running on port 3000"));
