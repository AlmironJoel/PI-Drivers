const axios = require ('axios');
const URL =  "http://localhost:5000/drivers";
const addImage = require('../helpers/addImage')

const getDriversControllers = async () =>{
 const {data} = await axios.get(`${URL}`);

 return addImage(data)
};

module.exports ={getDriversControllers} 