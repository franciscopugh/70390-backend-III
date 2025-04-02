import 'dotenv/config'
import express from "express";
import logger from "./log/logger.js";

const app = express()
const PORT = 8080

app.use(express.json())

app.use((req,res,next) => {
    logger.http(`${req.method} en ruta ${req.url}`)
    next()
})

app.get('/testlogs', (req,res)=> {
    try {
        logger.fatal("fatal")
        logger.error("error")
        logger.info("info")
        logger.warning("Warning")
        logger.debug("debug")
        res.status(200).send("HOla")
        
    } catch(e) {
        if(e == "Error en carrito")
            logger.fatal("fatal")
        else
            logger.error(e)
        
        res.status(500).send("Error generado")
    }
    
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})