const Sequelize = require('sequelize')
require('dotenv').config()
const {HOST, USER, DATABASE, PASSWORD} = process.env

const sequelize= new Sequelize(DATABASE, USER,PASSWORD, {
    host: HOST,
    dialect: 'mysql'
})

// Defino los modelos
const postsModel = sequelize.define('posts',{
    "id":{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    "titulo":{
        type: Sequelize.STRING,
        allowNull: false
    },
    "contenido":{
        type: Sequelize.STRING,
        allowNull: false
    },
    "imagen":{
        type: Sequelize.STRING,
        allowNull: false
    },
    "fecha_creacion":{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
})
 
const categoriasModel = sequelize.define('categorias',{
    "id":{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    "name":{
        type: Sequelize.STRING,
        allowNull: false
    }   
    },
    {
        timestamps: false
    })

var arrModels=[postsModel, categoriasModel]

arrModels.forEach(model=>
    model.sync({force:false}).then(()=>{console.log("tabla creada");})
    )

sequelize.authenticate()
    .then( ()=>{ console.log("CONEXION EXITOSA!")
                    console.log(sequelize,'<== sequelize');
    ;})
    .catch(error=>{ console.log(error);})

module.exports={
    ...sequelize.models
}