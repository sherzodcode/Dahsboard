import express from "express"
import cors from "cors"
import {engine} from "express-handlebars"




const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.engine('.hbs', engine({extname: ".hbs"}))
app.set('view engine','.hbs')
app.set('views' , './views')



app.listen(8080, () => {
    console.log('server is running');
})