import knex from "knex";

const TABLE = "categories";

export const getAll = (userID) =>{
  return knex(TABLE).select("*").where({"user_id": userID});
}

export const get = (id, userID) =>{
  return knex(TABLE)
  .where({id})
  .andWhere({"user_id": userID})
  .select("*").
  first();
}

export const save = (params) =>{
  return knex(TABLE).insert(params);
}

export const update = (id, params, userID) =>{
  return knex(TABLE)
  .where({id})
  .andWhere({"user_id": userID})
  .update(params);
}

export const remove = (id, userID) =>{
  return knex(TABLE)
  .delete()
  .where({id})
  .andWhere({"user_id": userID});
}
