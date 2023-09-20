import express from 'express'
import cors from 'cors'

import router from './src/router/router'


const app = express();

app.use(cors())
app.use(express.json())
app.use(router)   


app.listen(3000, () => {
    console.log("Server Running port:3000");
  })
  
