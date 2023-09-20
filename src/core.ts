import {Document, Packer, Paragraph, TextRun, AlignmentType, Spacing} from 'docx'
import createDocument from './services/CreateDocument';


export async function gerarContratoAlteraçaoEmpresa(dados) {
  
  const doc = await createDocument()
  
  const buffer = await Packer.toBuffer(doc);

  return buffer
}



