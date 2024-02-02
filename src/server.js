import express from "express";
import dotenv from "dotenv";
dotenv.config();
import useRouter from "./module/user/user.route.js";
const app = express();
app.use(express.json());

app.use("/users", useRouter);

app.get("/health", (_, res)  =>{
  return res.send("Hello World!");
})

app.listen(8080, async () =>{
  console.log("Server ruinning on port 8080");
})