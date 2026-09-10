const express=require("express");
const router=express.Router();
const studentController=require("../controller/studentController");

///Read Operation
router.get("/",studentController.get
)
//Read operation with i
router.get("/:rollNo",studentController.getStudentById)
//Create
router.post("/",studentController.addStudent)
////update
router.put("/:rollNo",studentController.updateStudent)
//delete
router.delete("/:rollNo",studentController.deleteStudent)

module.exports=router

