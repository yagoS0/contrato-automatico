import path from "path";
import fs from 'fs'

import {gerarDocumento} from '../gerarDocumento'

export async function createContrato(
  request, 
  response
) {

  const dadosContrato = await request.body;
  console.log(dadosContrato)
  
  const contratoAlteraçaoEmpresa = await gerarDocumento(dadosContrato);

  // Salva o contrato gerado em um novo arquivo
  fs.writeFileSync(path.resolve( 'src/out', 
  'contrato_saida.docx'), contratoAlteraçaoEmpresa);

  console.log('Contrato de abertura de empresa gerado com sucesso!');

  return response.status(201).send("Enviado com sucesso!");
}
