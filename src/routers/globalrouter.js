import express from "express";
import { join, login } from "../controllers/usercontroller";
import { trending, search } from "../controllers/videocontroller";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
export default globalRouter;
