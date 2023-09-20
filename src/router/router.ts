import express from "express";
import path from "path";

import { createContrato } from "../controller/CreateContrato";



const routers  = express.Router()

  
routers.post("/contrato", createContrato);
routers.get('/download', (request, response) => {
  response.download(path.resolve('src/out/contrato_abertura_empresa.docx'))
})


export default routers;
