const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverconfig.js')

const setupandstartserver=async()=>{
    //crete the express object
    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server started at port${PORT}`);
    });

}

setupandstartserver();