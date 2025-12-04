import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import { connectDB } from './utils/db';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`E-commerce API running on port ${PORT}`));
