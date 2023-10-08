const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Driver } = require("../db");
const axios = require ('axios');
const addImage = require('../helpers/addImage')
const URL =  "http://localhost:5000/drivers";

const getNameControllers = async (name) =>{
    const {data} = await axios.get(`${URL}`);
    const nameToLower = name.toLowerCase();//*convierte el nombre de busqueda Name en minuscula
    const filteredDrivers = data.filter((driver) =>//*Filtra los conductores de la respuesta de la API en función de una coincidencia insensible a mayúsculas y minúsculas en la propiedad driverRef:
    driver.driverRef.toLowerCase().includes(nameToLower)
    );

    const filteredDB = await Driver.findAll({
        where: { apellido: { [Op.iLike]: `%${nameToLower}%` } },
      });


      //*Si no se encuentran conductores ni en la API ni en la base de datos, se lanza un error
    if(filteredDrivers.length === 0 && filteredDB.length === 0){
        throw Error('Driver no encontrado.')
    }
    
    const challengedFilters = addImage(filteredDrivers) //verifica que contengan img

    return [...challengedFilters.slice(0,15),...filteredDB.slice(0, 15)];//tira los primeros 15 tanto de BD como API
};

module.exports={getNameControllers}