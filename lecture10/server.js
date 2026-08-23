const express=require("express");
const app=express();
const PORT=3000

const students=[
    {rollNo:1, name:"Suman",section:"Core-B"},
    {rollNo:2, name:"Muskan",section:"Core-B"},
    {rollNo:3, name:"Sukhvinder ",section:"Core-B"}
]
// READ OPERATION
app.get("/students",(req,res)=>{
    res.json(students)
})

// Read Operation with id 
app.get("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(student===undefined){
        res.status(404).json({success:false,message:"student not found"});
    }
    res.json({success:true,student});
})

app.listen(PORT,()=>console.log("server is running on port 3000"));