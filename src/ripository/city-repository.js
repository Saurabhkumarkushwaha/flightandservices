const {City}=require('../models/index');

class Cityrepository{
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            throw{error};
        }
    }

    async deleteCity(cityid){
        try{
            await city.destroy({
                where: {
                    id:cityId
                }
            });
        }catch(error){
            throw {error};
        }
    }
}
module.exports=Cityrepository;