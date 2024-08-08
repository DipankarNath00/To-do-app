const express = require('express')
const { taskRouter } = require('./routes/taskRoutes')
const app  = express()
const PORT = process.env.PORT||3000
app.listen(PORT)
//middleware 
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.redirect("/task")
})
app.use("/task",taskRouter)
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"})
})
