import { DataTypes, Sequelize } from 'sequelize';

export const ProductSQL = (sequelize: Sequelize) => {
  return sequelize.define('Product', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT, allowNull: false },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
};
