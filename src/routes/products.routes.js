import {Router} from "express";
import {addProducts, getProducts} from '../controllers/products.controller';
const router = Router();


//Aqui se crean los EndPoints para los Productos, Lista, Agregar, Eliminar y Modificar
/**
 * @swagger
 * components:
 *   schemas:
 *     Productos:
 *       type: object
 *    
 *      
 *       
 */

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: EndPoints de los productos
 * /Inventario/listProductos:
 *   get:
 *     summary: Lista de productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Productos'
    /Inventario/saveProductos:
 *   post:
 *     summary: Agrega un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Productos'
 *     responses:
 *       200:
 *         description: Producto agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: Producto Producto Ejemplo con descripción Descripción del producto ejemplo agregado.
 *       400:
 *         description: Parámetros inválidos
 */
router.get('/Inventario/listProductos', getProducts)


router.post('/Inventario/saveProductos', addProducts)

// router.get('/productos', getProducts)

export default router