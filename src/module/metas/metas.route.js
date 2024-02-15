import { Router } from "express";
import { getAll, get, save, update, remove } from "./metas.model.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const data = await getAll(req.user.id);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const data = await get(req.params.id, req.user.id);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const data = await save(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const data = await update(req.params.id, req.body, req.user.id);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await remove(req.params.id, req.user.id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
