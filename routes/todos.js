const express=require("express");
const router =express.Router();

//import controller
const {createTodo}=require("../controller/createTodo");
const {getTodo}=require("../controller/getodo");

//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);

module.exports=router;