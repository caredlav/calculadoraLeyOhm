const db=require('../database/models');

const voltajesModel={

    findAll: ()=>{
       return db.Voltaje.findAll()
        .then(resultado=>resultado)
        .catch(error=>console.log(error));
    },
    newRecord: (valor1,valor2)=>{
        return db.Voltaje.create({
            valor_corriente:valor1,
            valor_resistencia:valor2,
            valor_resultado: valor1 * valor2
        })
        .then(result=>result)    
        .catch(error=>console.log(error))
    }

}



module.exports=voltajesModel;