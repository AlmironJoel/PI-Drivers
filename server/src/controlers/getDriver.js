const axios = require("axios");

async function getDriver(req, res) {
  const URL = "http://localhost:5000/driver";

  try {

    const {data} = await axios.get(`${URL}`);

    const drivers = {
      id: data.id,
      nombre: data.name.forename,
      apellido: data.name.surname,
      image: data?.image,
      descripcion: data.description,
      nacionalidad: data.nationality,
      fechaDeNacimiento:data.dob
    };


    drivers.nombre
      ? res.status(200).json(drivers)
      : res.status(404).json({message: "No hay tal"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = getDriver;