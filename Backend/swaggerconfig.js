
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HRMS API',
      version: '1.0.0',
      description: 'API documentation for your Express application',
      
    },
  
},
  
  apis: ['./routes/routes.js'], // Path to your API routes
};


const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
/* Backend\routes\routes.js */