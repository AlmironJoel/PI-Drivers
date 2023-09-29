const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Driver } = require("../db");
const axios = require ('axios');
const addImage = require('../helpers/addImage')
const URL =  "http://localhost:5000/drivers";

const getNameControllers = async (name) =>{
    const {data} = await axios.get(`${URL}`);
    const nameToLower = name.toLowerCase();
    const filteredDrivers = data.filter((driver) =>
    driver.driverRef.toLowerCase().includes(name.toLowerCase())
    );

    const filteredDB = await Driver.findAll({
        where: { apellido: { [Op.iLike]: `%${nameToLower}%` } },
      });

    if(filteredDrivers.length === 0 && filteredDB.length === 0){
        throw Error('Driver no encontrado.')
    }
    const challengedFilters = addImage(filteredDrivers)
    return [...challengedFilters.slice(0,15),...filteredDB.slice(0, 15)];
};

module.exports={getNameControllers}