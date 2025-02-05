const Product = require('./productModel');
const Category = require('./categoryModel');

const models = {
    Product,
    Category,
};

// Initialize associations
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = models; 