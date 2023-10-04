const {createDriver} = require('../controllers/postDriversControllers')
const {getDriversControllers} = require('../controllers/getDriversControllers')
const {getNameControllers} = require ('../controllers/getNameControllers')
const {getIdController} = require ('../controllers/getIdControllers')

const getDriverHandler = async (req ,res) => {
    const {name} = req.query
    const algo = name
    try {
        if(name){
            const filteredDrivers = await getNameControllers(name);
            res.status(200).json(filteredDrivers)
        } else{
            const allDrivers = await getDriversControllers();
            res.status(200).json(allDrivers)
        } 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getDetailHandler = async (req,res) => {
    const {id} = req.params
   try {
    const IdController = await getIdController(id) 
    res.status(200).json(IdController)
   } catch (error) {
    res.status(400).json({error:error.message})
   }
    
}   

const postDriverHandler = async(req, res) => {
    const {nombre,
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
        res.status(400).json({error:error.message})
    }
}

module.exports={
    getDetailHandler,
    getDriverHandler,
    postDriverHandler
}