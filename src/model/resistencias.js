const db=require('../database/models');

const resistenciasModel={

    findAll: ()=>{
       return db.Resistencia.findAll()
        .then(resultado=>resultado)
        .catch(error=>console.log(error));
    },
    newRecord: (valor1,valor2)=>{
        return db.Resistencia.create({
            valor_voltaje:valor1,
            valor_corriente:valor2,
            valor_resultado:valor1 / valor2
        })
        .then(result=>result)    
        .catch(error=>console.log(error));
    }

}



module.exports=resistenciasModel;