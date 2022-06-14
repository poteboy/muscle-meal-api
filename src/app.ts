import express from "express";
import userController from "./controllers/userController";
import authController from "./controllers/authController";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});

app.use("/users", userController);
app.use("/auth", authController);

export default app;
