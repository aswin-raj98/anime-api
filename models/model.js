import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
    animeName:{type:String,required:true},
    animeRating:{type:Number,required:true}
})

const Anime = mongoose.model("anime",animeSchema);

export default Anime;