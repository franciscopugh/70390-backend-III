import 'dotenv/config'
import winston from "winston";

const customLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    },
    colors: {
        fatal: 'red',
        error: 'yellow',
        warning: 'blue',
        info: 'green',
        http: 'gray',
        debug: 'white'
    }
}

const logger = winston.createLogger({
    levels: customLevels.levels,
    transports: [
        new winston.transports.Console({
            level:"info",
            format: winston.format.combine(
                winston.format.colorize({colors:customLevels.colors}),
                winston.format.simple()
            )
        }),
        //Para errores, archivo
        new winston.transports.File({
            filename: './error.log',
            level: 'error',
            format: winston.format.simple()
        }),
        new winston.transports.File({
            filename: './error.log',
            level: 'fatal',
            format: winston.format.simple()
        }),
        new winston.transports.File({
            filename: './warnings.log',
            level: 'warning',
            format: winston.format.simple()
        }),
        new winston.transports.File({
            filename: './debug.log',
            level: 'debug',
            format: winston.format.simple()
        })

    ]
})

export default logger