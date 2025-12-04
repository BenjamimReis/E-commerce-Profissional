import { Request, Response } from 'express';
import { ProductSQL } from '../models/Product';
import { sequelize } from '../utils/db';

const Product = ProductSQL(sequelize);

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll();
  res.json(products);
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, description, price, stock } = req.body;
  const product = await Product.create({ name, description, price, stock });
  res.json(product);
};
