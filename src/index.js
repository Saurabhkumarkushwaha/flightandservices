const express=require('express');
const bodyparser=require('body-parser');

const {PORT}=require('./config/serverconfig.js');
const Cityrepository=require('./repository/city-repository');

const setupandstartserver=async()=>{
    //crete the express object
    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    app.listen(PORT,async()=>{
        console.log(`Server started at port${PORT}`);
        const repo=new Cityrepository();
        repo.createCity({name:"New delhi"});
    });

}

setupandstartserver();