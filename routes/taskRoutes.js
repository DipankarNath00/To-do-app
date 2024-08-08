const {Router} = require('express')
const taskRouter = Router()

taskRouter.get('/',(req,res)=>{
                  res.render('index',{title:"Home"})
              })
taskRouter.get("/signin",(req,res)=>{
                res.render("sign-in",{title:"Sign in"})
            })
taskRouter.get("/about",(req,res)=>{
               res.render("about",{title:"About App"})
            })

taskRouter.get('/:taskId',(req,res)=>{
  
})
taskRouter.delete('/:taskId',(req,res)=>{
  
})

module.exports= {
    taskRouter
}