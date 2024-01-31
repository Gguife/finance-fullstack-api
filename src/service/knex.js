let conn;

const knexService = () =>{
  if(!conn){
    conn = ""; //TODO connect to DB;
  }

  return conn;
}

export default knexService;