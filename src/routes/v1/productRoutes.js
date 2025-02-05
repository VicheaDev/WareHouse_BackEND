const express = require('express');
const router = express.Router();
const upload = require('../../config/multerConfig'); // Import multer config
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../../controllers/productController');

router.route('/')
    .get(getProducts)
    .post(upload, createProduct); // Use multer middleware for image upload

router.route('/:id')
    .get(getProduct)
    .put(upload, updateProduct) // Use multer middleware for image upload
    .delete(deleteProduct);

module.exports = router; 