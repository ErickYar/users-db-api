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
        //Esta configuracon es para produccion 
        prod:{ 
             dialect:"postgres",
            host:"localhost",
            port: 5432,
            database:'user',
            username:'postgres',
            password:'root',
            //Esta configuracion es para produccion 
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