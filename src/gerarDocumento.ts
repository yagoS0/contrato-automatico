import {Document, Packer, Paragraph, TextRun, AlignmentType, Spacing} from 'docx'
import Contrato from '../src/services/Contrato';
import ParagrafosConsolidacao from '../src/services/ParagrafosConsolidacao'
const paragrafoConsolidacao = new ParagrafosConsolidacao()

const contrato = new Contrato()

export async function gerarDocumento(dados) {
  

  const doc = contrato.create()
  
  const buffer = await Packer.toBuffer(doc);

  return buffer
}



