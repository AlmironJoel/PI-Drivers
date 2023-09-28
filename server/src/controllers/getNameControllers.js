const axios = require ('axios');
const addImage = require('../helpers/addImage')
const URL =  "http://localhost:5000/drivers";

const getNameControllers = async (name) =>{
    const {data} = await axios.get(`${URL}`);

    const filteredDrivers = data.filter((driver) =>
    driver.driverRef.toLowerCase().includes(name.toLowerCase())
    );

    if(filteredDrivers.length === 0){
        return {mensaje:'Driver no encontrado.'}
    }
    const challengedFilters = addImage(filteredDrivers)
    return challengedFilters.slice(0,15);
};

module.exports={getNameControllers}