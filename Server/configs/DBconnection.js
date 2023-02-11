const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
exports.DBconnection = () =>{
          try{
                    mongoose.connect(process.env.MONGDBURL)
                    console.log(`Connection Established on ${process.env.MONGDBURL} at PORT : ${process.env.PORT} `);
                    
          }catch(err){
                    console.log("DataBase Error >>"+err);
          }
} 
