const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: Category });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, { include: Category });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, categoryId } = req.body;
        const image = req.file ? req.file.path : null;

        const product = await Product.create({
            name,
            description,
            price,
            image,
            categoryId
        });
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, categoryId } = req.body;
        const image = req.file ? req.file.path : null;

        const product = await Product.findByPk(req.params.id);
        const existingImages = product.image || [];

        const [updated] = await Product.update({
            name,
            description,
            price,
            image,
            categoryId
        }, {
            where: { id: req.params.id }
        });

        if (!updated) return res.status(404).json({ error: 'Product not found' });
        
        const updatedProduct = await Product.findByPk(req.params.id, { 
            include: Category 
        });
        res.json({ 
            message: 'Product updated successfully',
            data: updatedProduct 
        });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
