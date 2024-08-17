//import sql from "mssql";
import mysql from "mysql2/promise";

const dbSettings ={
    user: "root",
    password: "admin",
   // server:"localhost",
    database:"thebigappleshop",
    // options:{
    //     trustServerCertificate:true
    // }

};

export async function getConnection(){
    try{
          const pool = await mysql.createPool(dbSettings);    
        return pool;
    }

    catch(error){
        console.log(error);
    }
 
 
}

