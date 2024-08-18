const  mongoose = require('mongoose')
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        default:"Easy"
    },
    completed:{
        type:Boolean,
        default:true
    }
},{timestamps:true})
const Task = mongoose.model('task',taskSchema)
module.exports = Task;
