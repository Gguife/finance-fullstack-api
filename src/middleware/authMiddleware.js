import jwt from "jsonwebtoken";
import { get } from "../module/user/user.model.js";

export const authMiddleware = async (req, res ,next) =>{
  try{
    const isValid = jwt.verify(req.token, process.env.JWT_SECRET);
    const user = await get(isValid.id);
    req.user = user;
    next();
  } catch(error){
      return res.status(400).json({ message: "Invalid token!" });  
  }

}

