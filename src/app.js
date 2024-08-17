import express from "express";
import config from './config'
import productRoutes from './routes/products.routes'
import paymentRoutes from './routes/payument.routes'
const app = express();


app.set('port', config.port);

app.use(express.json()); 

app.use(productRoutes);
app.use(paymentRoutes);


export default app;