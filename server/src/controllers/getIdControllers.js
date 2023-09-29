const axios = require("axios");
const { Driver } = require("../db");
const apiUrl = "http://localhost:5000/drivers";
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;


const getIdController = async (id) => {
  if (!Number.isNaN(Number(id))) {
    const resp = await axios.get(`${apiUrl}`);

    const response = resp.data.filter((driver) => driver.id === +id);

    const driver = {
      id: response[0].id,
      nombre: response[0].name?.forename,
      apellido: response[0].name?.surname,
      descripcion: response[0].description,
      image: response[0].image?.url
        ? response[0].image?.url
        : "https://img.freepik.com/foto-gratis/coche-deportivo-brillante-conduciendo-pista-deportiva-iluminada-ia-generativa_188544-53590.jpg",
      nacionalidad: response[0].nationality,
      FechaDeNacimiento: response[0].dob,
      teams: response[0].teams,
    };
    return driver;
  } else {
    console.log("Requering from the DB");
    const driverDB = await Driver.findOne({
      where: { id: { [Op.iLike]: `%${id}%` } },
    });
    return driverDB;
  }
};

module.exports = getIdController;
