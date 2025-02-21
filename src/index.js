const express=require('express');
const {PORT}=require('./config/serverconfig.js')

const setupandstartserver=async()=>{
    //crete the express object
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server started at port${PORT}`);
        console.log(process.env);
    });

}

setupandstartserver();