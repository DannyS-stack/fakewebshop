"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productOrders.belongsTo(models.product);
      productOrders.belongsTo(models.order);
    }
  }
  productOrders.init(
    {
      orderId: DataTypes.INTEGER,

      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "productOrders",
    }
  );
  return productOrders;
};
