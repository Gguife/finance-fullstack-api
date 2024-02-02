import { Router } from "express";
import { login, register } from "./auth.service.js";

const router = Router();

router.post("/login", async (req, res) =>{
  const data = await login(req.body);
  return res.status(200).json({ data });
})

router.post("/register", async (req, res) =>{
  const data = register(req.body);
  return res.status(200).json({ data });
})


export default router;