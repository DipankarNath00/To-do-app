const express = require('express')
const taskRouter = express.Router()

taskRouter.get('/task',(req,res)=>{
                  res.render('index',{title:"Home"})
              })
taskRouter.get("/task/signin",(req,res)=>{
                res.render("sign-in",{title:"Sign in"})
            })
taskRouter.get("/task/about",(req,res)=>{
               res.render("about",{title:"About App"})
            })

taskRouter.get('/task/:taskId',(req,res)=>{
  
})
taskRouter.delete('/task/:taskId',(req,res)=>{
  
})

module.exports= {taskRouter}
