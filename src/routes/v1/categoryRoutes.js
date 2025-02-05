// routes/v1/category.routes.js
const express = require('express');
const router = express.Router();
const { 
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../../controllers/categoryController');

// /api/v1/categories endpoints
router.route('/')
    .get(getCategories)
    .post(createCategory);

router.route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;