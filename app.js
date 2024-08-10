const express = require('express')
const { taskRouter } = require('./routes/taskRoutes'); // Correct import
const app  = express()
const PORT = process.env.PORT||3000
app.listen(PORT)
console.log(taskRouter)
//middleware 
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.redirect("/task")
})
app.get('/task/about',(req,res)=>{
    res.render('about',{title:"About"})
})
app.use(taskRouter)
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"})
})
