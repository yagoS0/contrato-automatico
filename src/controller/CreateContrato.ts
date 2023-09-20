import path from "path";
import fs from 'fs'

import {gerarContratoAlteraçaoEmpresa} from '../core'

export async function createContrato(
  request, 
  response
) {

  const dadosContrato = await request.body;
  console.log(dadosContrato)
  
  const contratoAlteraçaoEmpresa = await gerarContratoAlteraçaoEmpresa(dadosContrato);

  // Salva o contrato gerado em um novo arquivo
  fs.writeFileSync(path.resolve( 'src/out', 
  'contrato_saida.docx'), contratoAlteraçaoEmpresa);

  console.log('Contrato de abertura de empresa gerado com sucesso!');

  return response.status(201).send("Enviado com sucesso!");
}
