import app from "./app";


app.listen(app.get('port'));

console.log('Puerto', app.get('port'))


//Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");
const swaggerSpec  = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"BigAppleStore",
            version:"1.0.0"
        },
        servers:[
            {
                url:"http://localhost:3000",
            }
        ]
    }, 
    apis: ["src/routes/*.js"],
    apis:["src/routes/products.routes.js"]
}
// const swaggerSpec =swaggerJsDoc(options)


//Middleware
app.use("/api-doc",swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)))
