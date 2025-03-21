/*import {Command} from 'commander'
import dotenv from 'dotenv'

const program = new Command()


//Configuracion de flags de Commander
program
    .option('-d', "Variable de debug", false)
    .option('-p <port>', "Puerto de mi aplicacion", 8080)
    .option('--mode <mode>', "Entorno de ejecucion", "development")
    .requiredOption('-u <user>', "Usuario que va a ejecutar esta aplicacion", "No se ingreso ningun usuario")
    .option('-l --letters [letters...]', "Letras de prueba agrupadas en un array")
program.parse()

const config = program.opts()

console.log(config);

const enviroment = config.mode

dotenv.config({
    path: enviroment == "production" ? './.env.prod' : './.env.dev'
})

console.log(process.env.MONGO_URL);
*/

import express from 'express'
import { fork } from 'child_process'

const app = express()
const PORT = 8080

app.get('/suma', function (req,res) {
    const child = fork('./src/operacionCompleja.js') //Definir el archivo donde va a trabajar mi proceso hijo
    console.log("Proceso padre: ", process.pid);
    
    child.send("Ponete a trabajar") //Envio un mensaje para que el proceso hijo comience la operacion
    
    child.on('message', function(resultado) { //Esperando el resultado de este proceso
        console.log(resultado);
        res.status(200).json({message: resultado})
    })
    
})

app.get('/', (req,res) => {
    res.status(200).send("Inicio")
})

app.listen(PORT, () => {
    console.log("Server on port: ", PORT);
})