import express from 'express'
import userRouter from './routes/usersRoutes.js'
import compression from 'express-compression'
const app = express()
const PORT = 8080

app.use(express.json())
app.use(compression({
    brotli: {enabled: true, zlib: {}}
}))

app.use('/api/users', userRouter)

app.get('/test', (req,res) => {
    let string = ""
    for(let i = 0; i< 1000000; i++) {
        string += "Soy una cadena. "
    }
    res.status(200).json({message: string})
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})