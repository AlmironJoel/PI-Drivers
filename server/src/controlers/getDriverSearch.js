const { default: axios } = require("axios");
const {name} =  req.params;

async function getDriverSearch (req,res) {
    const queryLower = name.toLowerCase();
    const URL = `http://localhost:5000/drivers/query=${queryLower}`
try {
    const {data} = await axios.get(`${URL}`)

    const drivers = data.drivers
    
    if (drivers.length > 0) {
        // Limitar a los primeros 15 conductores
        const primeros15Drivers = drivers.slice(0, 15);
  
        // Mapear los datos de los conductores y devolver una lista
        const driverList = primeros15Drivers.map((data) => ({
          id: data.id,
          nombre: data.name.forename,
          apellido: data.name.surname,
          image: data.image,
          descripcion: data.description,
          nacionalidad: data.nationality,
          fechaDeNacimiento: data.dob,
        }));
  
        res.status(200).json(driverList);
      } else {
        res.status(404).json({ message: "No se encontraron conductores que coincidan con la búsqueda." });
      }
} catch (error) {
    res.status(500).json({message: error.message});
}
}

module.exports = getDriverSearch;