module.exports = (sequelize, dataTypes) => {
    const Voltaje = sequelize.define(`Voltaje`, {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER,
        },
        valor_corriente: {type: dataTypes.FLOAT},
        valor_resistencia: {type: dataTypes.FLOAT},
        valor_resultado: {type: dataTypes.FLOAT}
      },{
          tableName: `voltajes`,
          timestamps: false,
      });

      return Voltaje;
    };