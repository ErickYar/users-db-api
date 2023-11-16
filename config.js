require('dotenv').config()

const config = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'dev', // ? dev, prod, test
    db:{
        dev:{ 
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        database:'user',
        username:'postgres',
        password:'root',
        //Extra configs
        define:{
            timestamps:true,  
            underscored:true},
        },
        //Esta configuración es para producción 
        prod:{ 
            dialect:"postgres",
            host:process.env.BD_PROD_HOST,
            port: process.env.BD_PROD_PORT,
            database:process.env.BD_PROD_NAME,  
            username:process.env.BD_PROD_USER,
            password:process.env.BD_PROD_PASS,
            //Esta configuración es para producción 
            dialectOption:{
                ssl:{
                    require:true,
                    rejectUnauthorized:false,
                }
            }
            
        },
        test:{ 
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            database:'user',
            username:'postgres',
            password:'root',
            //Extra configs
        define:{
            timestamps:true,
            underscored:true
         }
    },
}}

module.exports = config