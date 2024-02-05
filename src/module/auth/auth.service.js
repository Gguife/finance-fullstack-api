import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { save, getByEmail } from "../user/user.model.js";


export const login = async (params) => {
  const user = await getByEmail(params.email);
  //TODO verify if user exist
  if(!user){
    return {error: "Invalid email or password"};
  }

  //TODO verify if password is correct
  const passwordCorrect = bcrypt.compareSync(params.password, user.password);
  if(!passwordCorrect){
    return {error: "Invalid email or password"};
  }

  //TODO gerate token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return { token };
}

export const register = async (params) => { 
  const user = await getByEmail(params.email);
  
  if(user){
    return {error: "This email already exists"};
  }

  const userCreated = await save(params);

  const token = jwt.sign({ id: userCreated[0] }, process.env.JWT_SECRET);
  return { token };  
}