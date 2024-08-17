import { getConnection } from "../database/connection";
import mysql from 'mysql2/promise'; 

export const getProducts = async(req, res) => 
{
    //Con estas lineas de codigo estoy mandando a llamar un store procedure 
    //El pool hace la conexion a la base de datos
    try {
    const pool = await getConnection();
    const result = await pool.query('CALL thebigappleshop.sp_Productos_List') //Asi es como se manda a llamar una store procedure en mysql
    res.json(result[0]);
    }
    catch(error){
        console.error('Error al ejecutar el procedimiento almacenado:', error);
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

export const addProducts = async (req, res) => {
    try{

       
        const {
            strNombreProducto,
            strDescripcionProducto,
            intCategoria,
            dblPrecio,
            intCantidad,
            intColor,
            intTalla
        } = req.body;

        console.log('Request body:', req.body); 

        // if (!strNombreProducto || !strDescripcionProducto || !intCategoria || dblPrecio === undefined || !intCantidad || !intColor || !intTalla) {
        //     return res.status(400).json({ message: 'Faltan parámetros requeridos' }); 
        // }

        const pool = await getConnection();
       // Ejecuta el procedimiento almacenado
       const result = await pool.request()
       .input('strNombreProducto', sql.VarChar, strNombreProducto)
       .input('strDescripcionProducto', sql.VarChar, strDescripcionProducto)
       .input('intCategoria', sql.Int, intCategoria)
       .input('dblPrecio', sql.Decimal(10, 2), dblPrecio)
       .input('intCantidad', sql.Int, intCantidad)
       .input('intColor', sql.Int, intColor)
       .input('intTalla', sql.Int, intTalla)
       .query('CALL thebigappleshop.sp_tbProductos_Save'); // Reemplaza con el nombre real del procedimiento almacenado


        res.json({ message: 'Producto agregado exitosamente' });

    }
    catch(error){
        console.error('Error al ejecutar el procedimiento almacenado:', error);
    }
  
}