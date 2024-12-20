import express from "express";
import { getAnime,postAnime,putAnime,deleteAnime } from "../controllers/control.js";

const routeAnime = express.Router();

routeAnime.get ("/",getAnime);
routeAnime.post("/",postAnime);
routeAnime.put("/:animeid",putAnime);
routeAnime.delete("/:animeid",deleteAnime);
export default routeAnime;