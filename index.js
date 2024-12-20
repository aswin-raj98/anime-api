import express from "express";
import mongoose from "mongoose";
import routeAnime from "./routes/route.js";


const uri = "mongodb+srv://user123:user123@cluster-api.gyysc.mongodb.net/animeDB";
mongoose.connect(uri).then(()=>console.log("database connected"));

const app = express();
app.use(express.json());
app.use("/",routeAnime);


app.listen(3030,()=>console.log("server started"));