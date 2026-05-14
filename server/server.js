const express = require('express')
const cors= require('cors')
const dotenv= require('dotenv')
const connectDB= require('./config/db')
const authRoutes = require('./routes/authRoutes')
const projectRoutes = require('./routes/projectRoutes')

dotenv.config()

const app= express()

connectDB();

app.use(cors());
app.use(express.json())
app.use("/api/auth/",authRoutes)
app.use("/api/projects", projectRoutes)

app.get("/", (req,res)=>{
    res.json("server working")
})

const PORT= process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server login on Port: ${PORT}`)
})