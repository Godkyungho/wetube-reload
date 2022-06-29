//강의 2.2부터 진행
import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>I love Middleware!</h1>");
};

const handleLogin = (req, res) => {
  return res.send("Login Here.");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounage. ");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

//아래부터 외부에 개방

const handleListening = () =>
  console.log(`✅Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
