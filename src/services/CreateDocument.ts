import {Document} from 'docx'
import Clasulas from '../services/Clasulas'

const clasulas = new Clasulas()

export default async function createDocument(){
  
  const doc = new Document({
    
    sections: [{
        children: [ 
          clasulas.titulo(),
          clasulas.dadosSocio(),
          clasulas.nomeEmpresarial().nameClasula,
          clasulas.nomeEmpresarial().clasula,
          clasulas.capitalSocial().nameClasula,
          clasulas.capitalSocial().clasula,
          clasulas.capitalSocial().capital,
          clasulas.capitalSocial().capitalTabela,
          clasulas.capitalSocial().clasulasTerceira,
          clasulas.capitalSocial().clasulasQuarta,
      ],
    }],
    
  });
  
  return doc
}