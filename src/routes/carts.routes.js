import { Router } from "express"
import { CartsController } from "../controllers/carts.controller.js"

const router = Router()

// Obtener todos los carritos 
router.get("/", CartsController.getCarts)

// Obtener un carrito por ID 
router.get("/:cid", CartsController.getCartById)

// Crear un carrito 
router.post("/", CartsController.createCart)

// Agregar un producto a un carrito 
router.post("/:cid/product/:pid", CartsController.addProductToCart)

// Actualizar un carrito con un array de productos 
router.put("/:cid", CartsController.updateProductsInCart)

// Actualizar la cantidad de un producto en el carrito 
router.put("/:cid/products/:pid", CartsController.updateProductQuantityInCart)

// Eliminar todos los productos de un carrito 
router.delete("/:cid", CartsController.deleteAllProductsInCart)

// Eliminar un producto del carrito 
router.delete("/:cid/products/:pid", CartsController.deleteProductInCart)

export { router as cartsRouter }