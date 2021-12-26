module.exports = (sequelize, dataTypes) => {
    const Resistencia = sequelize.define(`Resistencia`, {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER,
        },
        valor_voltaje: {type: dataTypes.FLOAT},
        valor_corriente: {type: dataTypes.FLOAT},
        valor_resultado: {type: dataTypes.FLOAT}
      },{
          tableName: `resistencias`,
          timestamps: false,
      });

      return Resistencia;
    };