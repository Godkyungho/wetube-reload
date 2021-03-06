//강의 2.2부터 진행
import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);

app.use("/users", userRouter);

app.use("/videos", videoRouter);

//아래부터 외부에 개방

const handleListening = () =>
  console.log(`✅Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
