const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories', // Name of the Category table
            key: 'id',
        },
        allowNull: false,
    },
}, {
    tableName: 'products',
    timestamps: true,
});

// Define associations
Product.associate = (models) => {
    Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
};

module.exports = Product; 