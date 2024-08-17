import sql from "mssql";

const dbSettings ={
    user: "JosueFg",
    password: ".",
    server:"localhost",
    database:"BigAppleShop",
    options:{
        trustServerCertificate:true
    }

};

export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);    
        return pool;
    }

    catch(error){
        console.log(error);
    }
 
 
}

