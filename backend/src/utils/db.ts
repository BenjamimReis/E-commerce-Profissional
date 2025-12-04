import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';

export const sequelize = new Sequelize(process.env.POSTGRES_URI || 'postgres://user:pass@postgres:5432/ecommerce');

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected');

    await mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/ecommerce');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1);
  }
};
