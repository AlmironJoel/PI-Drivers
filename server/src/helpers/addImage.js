const addImage = (arr) =>{
    const challenged = arr.map((driver)=>{
        if(!driver.image?.url.length){
            return{
                ...driver,  
                image:{
                    url:'https://img-9gag-fun.9cache.com/photo/a9qWR71_460s.jpg'
                }
            }
        } else {
            return driver;
        }
    });
    return  challenged
};
module.exports = addImage;