import {Packer} from 'docx'
import Contrato from '../src/services/Contrato';
import ContratoAlteração from './models/ContratoAlteração';

const contrato = new Contrato()
const contratoAlteração = new ContratoAlteração()
export async function gerarDocumento(data) {
  

  const paragrafos = contratoAlteração.create()


  const doc = contrato.create(paragrafos)
  
  const buffer = await Packer.toBuffer(doc);

  return buffer
}



