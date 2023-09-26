const { default: axios } = require("axios");
const {id} =  req.params;


async function getDriverById (req,res) {
   const URL = "http://localhost:5000/driver/:id"
try {
    const {data} = await axios.get(`${URL}${id}`)
    const driver = {
        id: data.id,
        nombre: data.name.forename
      };

      
    driver.nombre
    ? res.status(200).json(driver)
    : res.status(404).json({message: "No hay tal"});
} catch (error) {
    res.status(500).json({message: error.message});
}
}

module.exports = getDriverById;