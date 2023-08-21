const express = require('express');
const router = express.Router();

//Importing the Product controller to redirect to perform the desired function
const productController = require('../controllers/product_controller');

// Shows All the Products
router.get('/', productController.showProducts);

// Create  a new Product
router.post('/create', productController.create);

// Delete a Product with the given id
router.delete('/:id', productController.delete);

// Updates a Product with the given id to the given ammount
router.post('/:id/update_quantity', productController.updateQuantity);

module.exports = router;