module.exports = (sequelize, dataTypes) => {
    const Corriente = sequelize.define(`Corriente`, {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER,
        },
        valor_voltaje: {type: dataTypes.FLOAT},
        valor_resistencia: {type: dataTypes.FLOAT},
        valor_resultado: {type: dataTypes.FLOAT}
      },{
          tableName: `corrientes`,
          timestamps: false,
      });

      return Corriente;
    };