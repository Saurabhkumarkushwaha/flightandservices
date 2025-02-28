const {City}=require('../models/index');

class Cityrepository{
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
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
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city=await city.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }
    async getCity(cityId){
        try{
            const city=await city.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports=Cityrepository;