import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import useRouter from "./module/user/user.route.js";
import authRouter from "./module/auth/auth.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", useRouter);
app.use("/auth", authRouter);

app.get("/health", (_, res)  =>{
  return res.send("Hello World!");
})

app.listen(8080, async () =>{
  console.log("Server ruinning on port 8080");
})