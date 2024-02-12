import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bearerToken from "express-bearer-token";
dotenv.config();

import useRouter from "./module/user/user.route.js";
import authRouter from "./module/auth/auth.route.js";
import categoryRouter from "./module/categories/category.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bearerToken());

app.use("/users", useRouter);
app.use("/auth", authRouter);
app.use("/categories", categoryRouter);

app.get("/health", (_, res)  =>{
  return res.send("Hello World!");
})

app.listen(8080, async () =>{
  console.log("Server ruinning on port 8080");
})