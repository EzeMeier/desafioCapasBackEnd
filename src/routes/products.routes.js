import { Router } from "express"
import { uploader } from "../utils.js"
import { ProductsController } from "../controllers/products.controller.js"

const router = Router()

// Obtener todos los productos 
router.get("/", ProductsController.getProducts)

// Obtener un producto por ID 
router.get("/:pid", ProductsController.getProductById)

// Agregar un producto 
router.post("/", uploader.single("thumbnail"), ProductsController.addProduct)

// Actualizar un producto 
router.put("/", uploader.single("thumbnail"), ProductsController.updateProduct)

// Eliminar un producto 
router.delete("/", ProductsController.deleteProduct)

export { router as productsRouter }