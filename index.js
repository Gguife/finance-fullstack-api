import express from "express";
const app = express();
app.use(express.json());

app.get("/health", (_, res)  =>{
  return res.send("Hello World!");
})

app.listen("8080", () =>{
  console.log("Server ruinning on port 8080")
})