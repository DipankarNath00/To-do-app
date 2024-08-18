const express = require('express')
const { taskRouter } = require('./routes/taskRoutes'); // Correct import
const app  = express()
const mongoose = require('mongoose')
const Task = require("./models/task")
const PORT = process.env.PORT||3000
//connect to mongodb
const dburi = "mongodb+srv://dipankar4444:test1234@nodetuts.fnpfy3i.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts";
mongoose.connect(dburi).then(
    (result)=>{
        app.listen(PORT)
    }
).catch((err)=>console.log(err))
//middleware 
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json());  

app.get('/',(req,res)=>{
    res.redirect("/task")
})

app.get('/task',(req,res)=>{
    Task.find().then((result)=>{
        res.render('index',{title:"All task",tasks:result})
    }).catch(err=>console.log(err))
})
app.post('/task', (req, res) => {
    const task = new Task({
        title : req.body.title,
        difficulty:req.body.difficulty,
        completed:false
    }); 
    
    task.save()
        .then(result => {
            console.log("Task Saved");
            res.redirect("/task")
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Failed to create task" });
        });
});

app.put("/task/:id",async (req,res)=>{
    try{
        const id=req.params.id;
        const completed=req.body.completed;
        const task = await Task.findByIdAndUpdate(id,{completed},{new:true})
        // console.log(task)
    
    }catch(error){
        res.status(500).json({ error: "Failed to update task" });

    }
})
app.delete("/task/:id",(req,res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id).
    then(result=>{
        res.json({message:"Task deleted"})
        res.redirect('/task')
    })
    .catch(err=>console.log(err))
})
app.get('/task/about',(req,res)=>{
    res.render('about',{title:"About"})
})
app.use(taskRouter)
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"})
})
