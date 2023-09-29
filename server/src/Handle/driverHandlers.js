const {createDriver} = require('../controllers/postDriversControllers')
const {getDriversControllers} = require('../controllers/getDriversControllers')
const {getNameControllers} = require ('../controllers/getNameControllers')

const getDriverHandler = async (req ,res) => {
    try {
        const {name} = req.query

        if(name){
            const filteredDrivers = await getNameControllers(name);
            res.status(200).json(filteredDrivers)
        } else{
            const allDrivers = await getDriversControllers();
            res.status(200).json(allDrivers)
        } 
    } catch (error) {
        res.status(500).json({error:error.menssage})
    }
};

const getDetailHandler = (req,res) => {
    res.status(200).send("Aqui  esta el detail")
}   

const postDriverHandler = async(req,res) => {
    const {
        nombre,
        apellido,
        descripcion,
        nacionalidad,
        FechaDeNacimiento,
        teamName}=req.body

    try {
       const created = await createDriver(
            nombre,
            apellido,
            descripcion,
            nacionalidad,
            FechaDeNacimiento,
            teamName
        );
        res.status(200).json(created)
    } catch (error) {
        res.status(450).json({error:error.menssage})
    }
}

module.exports={
    getDetailHandler,
    getDriverHandler,
    postDriverHandler
}