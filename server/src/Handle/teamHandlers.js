const{getTeamsController} = require ('../controllers/getTeamsControllers')

const getTeamsHandler = async (req,res)=>{
    try {
    const allTeams = await getTeamsController()
    res.status(200).json(allTeams)
    } catch (error) {
    res.status(500).json({error:error.menssage})
    }
}



// const getTeamsHandler = (req,res) =>{
//     res.status(200).send('Aqui estan todos los Teams')
// }

module.exports={getTeamsHandler}