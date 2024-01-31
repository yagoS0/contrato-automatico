import {Paragraph, TextRun, AlignmentType, Table, WidthType} from 'docx'
import { FileChild } from 'docx/build/file/file-child';
import data from '../tests/data_test'
import {enderecoEstabelecimento, enderecoNovo} from '../models/utils/enderecos'



import ClausulaAlteracao from '../services/ClausulasAlteracao';
import ClausulaConsolidacao from '../services/ClausulasConsolidacao';

const clausulaAlteracao = new ClausulaAlteracao()
const clausulaConsolidacao = new ClausulaConsolidacao()



export default class ContratoAlteração {
  
  create(){
    const paragrafos: FileChild[]  = []

      //Titulo
      paragrafos.push(clausulaAlteracao.titulo())

      //Dados dos socios
      clausulaAlteracao.dadosSocios().forEach(dadoSocio => {
        paragrafos.push(dadoSocio)
      })
      paragrafos.push(clausulaAlteracao.descricaoEmpresa())

      //razao social alteracao
      if(data.alteracao.nomeEmpresarial.razaoSocial){
        clausulaAlteracao.nomeEmpresarialAlteracao().forEach(e => {
        paragrafos.push(e)
        })
      }
      // Endereco Alteracao
      if(data.alteracao.endereco.rua){
        clausulaAlteracao.enderecaoAlteracao().forEach(e => {
          paragrafos.push(e)
          })
      }
        
    // objeto social alteracao
    if(data.alteracao.objetoSocial.atividades){
      clausulaAlteracao.atividadeAlteracao().forEach(e => {
        paragrafos.push(e)
      })
      data.contratoSocial.objetoSocial.atividades.forEach((atividade) => {
        const Cnae = new Paragraph({   
          children:[
            new TextRun({
              text: `${atividade.numeroCnae} - `,
              font: {
                name: 'Arial'
              },
              size: 24,
              bold:true
            }),
            new TextRun({
              text: `${atividade.descricaoCnae}`,
              font: {
                name: 'Arial'
              },
              size: 24,
            })
          ],  
          alignment: AlignmentType.BOTH,
          spacing: {
            after: 200
          }
    
        })
        paragrafos.push(Cnae)
    
        })
    }
    // Dados Socio Consolidacao
    if(data.alteracao.dadosSocios){
      clausulaConsolidacao.dadosSocios(data.alteracao.dadosSocios).forEach( e => {
        paragrafos.push(e)
      } )
    
    }else(
      clausulaConsolidacao.dadosSocios(data.contratoSocial.dadosSocios).forEach( e => {
        paragrafos.push(e)
      } )
    )

    // Nome emprearial consolidacao
    if(data.alteracao.nomeEmpresarial.razaoSocial === ' '){
      clausulaConsolidacao.nomeEmrpesarial(data.contratoSocial, enderecoEstabelecimento).forEach( e => {
        paragrafos.push(e)
      } )
    }else{
      clausulaConsolidacao.nomeEmrpesarial(data.alteracao, enderecoNovo ).forEach( e => {
        paragrafos.push(e)
      } )
      
    }
    // capial Social consolidacao
    if(data.alteracao.capitalSocial.capital === null){
      clausulaConsolidacao.capitalSocial(data.contratoSocial).forEach( e => {
        paragrafos.push(e)
      } )
    }else{
      clausulaConsolidacao.capitalSocial(data.alteracao).forEach( e => {
        paragrafos.push(e)
      } )
      
    }

  }
     


}

