const express = require('express')
const cors = require('cors')


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        

        //Rutas de mi aplicacion
        
        this.routes();
     }

     //Metodos


     middlewares(){
         //directorio publico
         this.app.use(express.static('public'))

         //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());
     }

     //Rutas metodos

     routes(){
        this.app.use(this.usuariosPath, require('../routes/user'));
     }


     //Puerto del servidor
     
     listen(){
        this.app.listen(this.port, ()=> console.log(`server run on ${this.port}`))
     }


}

module.exports = Server;