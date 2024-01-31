import {Paragraph, TextRun, AlignmentType, Table, WidthType} from 'docx'
import TableSocios  from '../models/utils/TableSocios'

import IData from './Interface/IData'


const tableSocios = new TableSocios()

class ClausulaConsolidacao{

  dadosSocios(data){
    const socios: Paragraph[] = []
    data.forEach((socio, index) => {
      const dadosSocioConsolidacao = new Paragraph({
        children: [
          new TextRun({
            text: `${index + 1}. `,
            bold: true,
            size: 24,
            font: {
              name: 'Arial'
            }
          }),
          new TextRun({
            text: socio.nome,
            size: 24,
            bold: true,
            font: {
              name: 'Arial'
            }
          }),
          new TextRun({
              text: ` nacionalidade ${socio.nacionalidade}, nascido(a) em ${socio.nascimento}, EMPRESARIO(A), casado em ***********, CPF nº ${socio.cpf}, identidade nº ${socio.identidade}, órgão expedidor ${socio.orgaoExpeditor}, residente e domiciliado no(a) ${socio.endereco.rua}, ${socio.endereco.numero} - ${socio.endereco.complemento} - ${socio.endereco.cidade}/${socio.endereco.estado} - ${socio.endereco.cep}`,
              size: 24,
              font: {
                name: 'Arial'
              }
            
            })
        ],
     
        alignment: AlignmentType.BOTH,
        spacing: {
          after: 600
        },
      })

      socios.push(dadosSocioConsolidacao)
    })
    return socios
  
  }

  nomeEmrpesarial(data: IData, endereco: string){
    const alteracaoNomeEmpresarialConsolidacao =  new Paragraph({
      
      children: [
   
        new TextRun({
          text: `NOME EMPRESARIAL E SEDE`,
          bold: true,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
       
      ],
   
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 200
      },
      
        
    })

    const clausulaAlteracaoNomeEmpresarialConsolidacao  =  new Paragraph({
    
      children: [
   
        new TextRun({
          text: `CLÁUSULA numero clasula  `,
          bold: true,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
        new TextRun({
          text: `A sociedade gira nesta praça sob a nome empresarial de ${data.nomeEmpresarial.razaoSocial}, com sede em ${endereco}.`,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
       
      ],
   
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 600
      },
    })
    return [alteracaoNomeEmpresarialConsolidacao,clausulaAlteracaoNomeEmpresarialConsolidacao]
  }

  capitalSocial(data: IData){
    const capitalSocialConsolidacao = new Paragraph({
      children: [

        new TextRun({
          text: 'DO CAPITAL SOCIAL',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }) 

      ],
      alignment: AlignmentType.CENTER,
      spacing: {
        before: 800
      }
    });
    const clasulaCapitalSocialConsolidacao = new Paragraph({
    
      children: [

        new TextRun({
          text: 'CLASULA NUMERO: ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `O capital da empresa é de R$${data.capitalSocial.capital} (----------) dividido em ${data.capitalSocial.quotas} (-------) quotas de valor nominal R$${data.capitalSocial.valorQuotas} (-------) cada uma, totalmente integralizado em moeda corrente desse país.` ,
          font: {
            name: 'Arial'
          },
          size: 24
        }),

        new TextRun({
          text: 'Parágrafo único: O capital social fica assim distribuído entre os sócios:' ,
          font: {
            name: 'Arial'
          },
          size: 24
        }) 
      
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }
    });
    

    

    const capitalSocialTabelaConsolidacao = new Table({
      alignment: AlignmentType.CENTER,     
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: tableSocios.create(data)
      
     
    })
    
    const responsabilidadeDosSociosConsolidacao = new Paragraph ({
      children: [

        new TextRun({
          text: 'Parágrafo único.' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: ' A responsabilidade dos sócios é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social, na forma do art. 1052 da Lei 10.406/02. Cada quota é indivisível e confere a seu titular o direito a voto nas deliberações sociais. ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
        }),
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400,
      }
    })
    return [capitalSocialConsolidacao,clasulaCapitalSocialConsolidacao,capitalSocialTabelaConsolidacao, responsabilidadeDosSociosConsolidacao]
  }

}

export default ClausulaConsolidacao