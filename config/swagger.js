// config/swagger.js

const swaggerAutogen = require('swagger-autogen')();
const fs = require('fs');
const path = require('path');

const doc = {
  info: {
    title: 'Employee Management API',
    description: 'Keep record of all Employees',
  },
  host: 'localhost:3000', // Replace with your server URL
  schemes: ['http'],
};

const outputFile = path.join(__dirname, '../swagger-output.json');

// Dynamically include all route files
const routesDir = path.join(__dirname, '../routes/router.js');
// const endpointsFiles = fs.readFileSync('./routes/router.js') 
// fs.readdirSync(routesDir).map(file => path.join(routesDir, file));

swaggerAutogen(outputFile, [routesDir], doc).then(() => {
  require('../index'); // Your project's root file
});
