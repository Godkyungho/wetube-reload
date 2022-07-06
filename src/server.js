//강의 2.2부터 진행

import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalrouter";
import userRouter from "./routers/userrouter";
import videoRouter from "./routers/videorouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;

//아래부터 외부에 개방
