import Anime from "../models/model.js";


const getAnime = async (req,res)=>{
    try {
        const animes = await Anime.find();
        if(animes.length === 0){
            return res.status(404).json({Notice:"No anime found"});
        }
        return res.status(200).json(animes);
    } catch (error) {
        console.log(error);
        return res.status(500).json({err:"Server Error"});
    }
}

const postAnime = async (req,res)=>{
    let animename = req.body.animeName;
    let animerating = req.body.animeRating;
    try {
        let animes = new Anime({
            animeName:animename,
            animeRating:animerating
        });
       await animes.save();
        return res.status(201).json(animes);
    } catch (error) {
        console.log(error);
        return res.status(500).json({err:"Server Error"});
    }
}

const putAnime = async (req, res) => {
    let animeId = req.params.animeid;
    let animeName = req.body.animeName;
    let animeRating = req.body.animeRating;
    try {
      let animes = await Anime.findByIdAndUpdate(animeId, {
        animeName,
        animeRating,
      });
      if (!animes) {
        return res.status(404).json({ Notice: "No anime found with this ID" });
      }
      return res.status(200).json(animes);
    } catch (error) {
      if (error.name === "ValidationError") {
        const messages = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({ errors: messages });
      } else {
        console.error(error);
        return res.status(500).json({ err: "Internal Server Error" });
      }
    }
  };

  const deleteAnime = async (req, res) => {
    let animeid = req.params.animeid;
    try {
        await Anime.findByIdAndDelete(animeid); 
        return res.status(200).json({ message: "Anime deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ err: "Server Error" });
    }
};
export {getAnime,postAnime,putAnime,deleteAnime};