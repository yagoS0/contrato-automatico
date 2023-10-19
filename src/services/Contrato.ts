import {Document} from 'docx'
import ParagrafosConsolidacao from '../services/ParagrafosConsolidacao'
import ParagrafoAlteracao from './ParagrafosAlteracao';

const paragrafoAlteracao = new ParagrafoAlteracao()
const paragrafoConsolidacao = new ParagrafosConsolidacao()

export default class Contrato{ 
  create(){
    const doc = new Document({
    sections: [{
        children: [ 
          paragrafoAlteracao.titulo(),
          paragrafoAlteracao.dadosSocio(),
          paragrafoAlteracao.descricaoEmpresa(),
          paragrafoAlteracao.alteracaoNomeEmpresarial().titulo,
          paragrafoAlteracao.alteracaoNomeEmpresarial().clausula,
          paragrafoAlteracao.alteracaoEndereco().titulo,
          paragrafoAlteracao.alteracaoEndereco().clausula,
          paragrafoAlteracao.objetoSocial().titulo,
          paragrafoAlteracao.objetoSocial().clasulaQuinta,
          paragrafoAlteracao.objetoSocial().descricaoAtividade,
          paragrafoAlteracao.objetoSocial().codificacaoAtividade,
          paragrafoAlteracao.objetoSocial().cnaeAtividade,
          paragrafoConsolidacao.titulo(),
          paragrafoConsolidacao.dadosSocio(),
          paragrafoConsolidacao.nomeEmpresarial().nameClasula,
          paragrafoConsolidacao.nomeEmpresarial().clasula,
          paragrafoConsolidacao.capitalSocial().nameClasula,
          paragrafoConsolidacao.capitalSocial().clasula,
          paragrafoConsolidacao.capitalSocial().capital,
          paragrafoConsolidacao.capitalSocial().capitalTabela,
          paragrafoConsolidacao.capitalSocial().clasulasTerceira,
          paragrafoConsolidacao.capitalSocial().clasulasQuarta,
          paragrafoConsolidacao.objetoSocialEPrazo().titulo,
          paragrafoConsolidacao.objetoSocialEPrazo().clasulaQuinta,
          paragrafoConsolidacao.objetoSocialEPrazo().descricaoAtividade,
          paragrafoConsolidacao.objetoSocialEPrazo().codificacaoAtividade,
          paragrafoConsolidacao.objetoSocialEPrazo().cnaeAtividade,
          paragrafoConsolidacao.objetoSocialEPrazo().clasulaSexta,
          paragrafoConsolidacao.administracaoProLabore().tituloClasula,
          paragrafoConsolidacao.administracaoProLabore().clasulaSetima,
          paragrafoConsolidacao.balancoLucrosPerdas().tituloClasula,
          paragrafoConsolidacao.balancoLucrosPerdas().clasulaOitava,
          paragrafoConsolidacao.balancoLucrosPerdas().paragrafoUnico,
          paragrafoConsolidacao.falecimentoSocio().tituloClasula,
          paragrafoConsolidacao.falecimentoSocio().clasulaDecima,
          paragrafoConsolidacao.falecimentoSocio().paragrafoUnico,
          paragrafoConsolidacao.foro().tituloClasula,
          paragrafoConsolidacao.foro().clasulaDecimaPrimeira,
          paragrafoConsolidacao.finalContrato().acordado,
          paragrafoConsolidacao.finalContrato().estadoData,
          paragrafoConsolidacao.assinaturas(),
          
      ],
      
    
    }],
    
  });
  return doc

  }
  
}
  
  
  