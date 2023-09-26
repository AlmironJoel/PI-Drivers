const axios = require("axios");

async function getDriver(req, res) {
  const URL = "http://localhost:5000/teams";

  try {

    const {data} = await axios.get(`${URL}`);
    
    const team = {
      id: data.id,
      team:data.teams 
    };

    team.teams
      ? res.status(200).json(team)
      : res.status(404).json({message: "No hay tal"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = getDriver;