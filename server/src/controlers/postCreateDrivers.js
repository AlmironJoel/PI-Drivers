const { Driver, Teams } = require("../db"); 

const postActivities = async (req, res) => {
    try {
        const { DriverName, TeamsName } = req.body; 

        const teams = await Teams.findOne({
            where: { teams: teams },
        });

        if (!TeamsName) {
            return res.status(404).json({ error: "teams not found" });
        }
        
        //agreaga   
        const newDriver = await Driver.create({
            id: data.id,
        nombre: data.name.forename,
        apellido: data.name.surname,
        image: data?.image,
        descripcion: data.description,
        nacionalidad: data.nationality,
        fechaDeNacimiento:data.dob
        });

        await newDriver.setDriver();

        res.status(200).json(newDriver);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Error while creating activity" });
    }
};

module.exports = postActivities;
