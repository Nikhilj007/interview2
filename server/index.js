import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Poll from './model.js';

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello from server');
})

app.get('/api/polls',async (req,res)=>{
    const polls=await Poll.find();
    res.status(200).json(polls);
})

app.post('/api/polls/:id',async (req,res)=>{
    const {id}=req.params;
    const poll=await Poll.findById(id);
    res.status(200).json(poll);
})

app.post('/api/polls',async (req,res)=>{
    const {question,options}=req.body;
    const poll=new Poll({question,options});
    await poll.save();
    res.status(200).json({message:'Poll created successfully'});
}) 

app.delete('/api/polls/:id',async (req,res)=>{
    const {id}=req.params;
    await Poll.findByIdAndDelete(id);
    res.status(200).json({message:'Poll deleted successfully'});
})

mongoose.connect('mongodb+srv://nikhiljhanov15:nikhiljhanov15@cluster0.zwwbhad.mongodb.net/interview?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('database connected'));

app.listen(5000, () => console.log('server running on port 5000'));