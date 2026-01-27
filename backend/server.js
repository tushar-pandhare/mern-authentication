const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const signLog = require('./routes/auth')

const app = express();
app.use(express.json());
app.use(cors());
app.use("/",signLog)

mongoose.connect(
    process.env.MONGO_URI
)
.then(()=>console.log("Mongo Db connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`);
});