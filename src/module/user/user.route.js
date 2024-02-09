import { Router } from "express";
import { getAll, get, save, update, remove } from "./user.model.js";
import { getMe } from "./user.service.js"; 

const router = Router();

router.get("/", async (_, res) =>{
  const data = await getAll();
  return res.status(200).json({data})
})

router.get("/me", async (req, res) =>{
  const data = await getMe(req.token);
  if(data.error){
    return res.status(400).json({error: data.error});
  }

  return res.status(200).json({data})
})

router.get("/:id", async (req, res) =>{
  const data = await get(req.params.id);
  return res.status(200).json({data})
})

router.post("/", async (req, res) =>{
  const data = await save(req.body);
  return res.status(200).json({data})
})

router.put("/:id", async (req, res) =>{
  const data = await update(req.params.id, req.body);
  return res.status(200).json({data})
})
 
router.delete("/:id", async (req, res) =>{
  const data = await remove(req.params.id);
  return res.status(200).json({data})
})


export default router;