const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./config/db'); // Import Sequelize instance
const models = require('./models/initModels');

const port = process.env.PORT || 3000;

// Check database connection on startup
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        
        // Sync models with database
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('All models were synchronized successfully.');
        
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        process.exit(1); // Exit process with failure
    });