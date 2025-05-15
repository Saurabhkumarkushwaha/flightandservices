const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverconfig');
const ApiRoutes = require('./routes/index');
const Cityrepository=require('./repository/city-repository');

const setupandstartserver = async()=>{
    //crete the express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server started at port${PORT}`);
        const repo=new Cityrepository();
        repo.createCity({name:"New delhi"});
    });

}

setupandstartserver();