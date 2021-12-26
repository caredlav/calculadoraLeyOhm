const db=require('../database/models');

const corrientesModel={

    findAll: ()=>{
       return db.Corriente.findAll()
        .then(resultado=>resultado)
        .catch(error=>console.log(error));
    },
    newRecord: (valor1,valor2)=>{
        return db.Corriente.create({
            valor_voltaje:valor1,
            valor_resistencia:valor2,
            valor_resultado:valor1/valor2
        })
        .then(result=>result)    
        .catch(error=>console.log(error));
    }

}



module.exports=corrientesModel;