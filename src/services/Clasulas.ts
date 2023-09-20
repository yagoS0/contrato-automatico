import {data} from '../tests/data_test'
import {Paragraph, TextRun, AlignmentType, Table, BorderStyle, WidthType, HorizontalPositionAlign} from 'docx'
import { TableSocios } from './TableSocios'

interface INameEmpresarial{
  nameClasula: Paragraph,
  clasula: Paragraph
}
const tableSocios = new TableSocios()
export default class Clausulas extends TableSocios{
  bordas  = {
    left: {
      style: BorderStyle.NONE,
    },
    right: {
        style: BorderStyle.NONE,
    },
    top: {
      style: BorderStyle.NONE,                    
    },
    bottom: {
      style: BorderStyle.NONE,
    },
  }
  
  titulo(){
    const titulo = new Paragraph({
      children: [
        new TextRun({
          text: 'CONTRATO SOCIAL DA EMPRESA',
          bold: true,
          size: 28,
          font: {
            name: 'Arial'
          },
        }),
        new TextRun({
          text: '',
          break: 1
        }),
        new TextRun({
            text: data.razaoSocial,
            size: 28,
            font: {
              name: 'Arial'
            },
            bold: true,
          })
      ],
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 800
      }
      
    }) 
    return titulo
  }

  dadosSocio(){
    const dadosSocio = new Paragraph({
      
      children: [
   
        new TextRun({
          text: '1. ',
          bold: true,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
        new TextRun({
          text: data.dadosSocio.nome,
          size: 24,
          bold: true,
          font: {
            name: 'Arial'
          }
        }),
        new TextRun({
            text: ` nacionalidade ${data.dadosSocio.nacionalidade}, nascido(a) em ${data.dadosSocio.nascimento}, EMPRESARIO(A), casado em ***********, CPF nº ${data.dadosSocio.cpf}, identidade nº ${data.dadosSocio.identidade}, órgão expedidor ${data.dadosSocio.orgaoExpeditor}, residente e domiciliado no(a) ${data.dadosSocio.endereco.rua}, ${data.dadosSocio.endereco.numero} - ${data.dadosSocio.endereco.complemento} - ${data.dadosSocio.endereco.cidade}/${data.dadosSocio.endereco.estado} - ${data.dadosSocio.endereco.cep}`,
            size: 24,
            font: {
              name: 'Arial'
            }
          
          })
      ],
   
      alignment: AlignmentType.NUM_TAB,
      spacing: {
        after: 600
      },
      
        
    })
    return dadosSocio
  }

  nomeEmpresarial(): INameEmpresarial{
    const textClasula = `A sociedade gira nesta praça sob a nome empresarial de ${data.razaoSocial}, com sede em ${data.dadosEmpresa.endereco.rua}, ${data.dadosEmpresa.endereco.numero} - ${data.dadosEmpresa.endereco.complemento} - ${data.dadosEmpresa.endereco.cidade}/${data.dadosEmpresa.endereco.estado} - ${data.dadosEmpresa.endereco.cep} `

    const nameClasula = new Paragraph({
      children: [

        new TextRun({
          text: 'DO NOME EMPRESARIAL E SEDE',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }) 

      ],
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 200
      }
    });
    const clasula = new Paragraph({
    
      children: [

        new TextRun({
          text: 'CLASULA PRIMEIRA: ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: textClasula ,
          font: {
            name: 'Arial'
          },
          size: 24
        }) 
      
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 600
      }
    });
    
    return {nameClasula,clasula}
  }
  capitalSocial(){
    const textClasula = `
    O capital da empresa é de 
    R$ ${data.capitalSocial.valor} (${data.capitalSocial.valorExtenso}) dividido em 
    ${data.capitalSocial.numeroQuotas} (${data.capitalSocial.numeroQuotasExtenso}) quotas de valor nominal 
    R$ ${data.capitalSocial.valorQuota} (${data.capitalSocial.valorQuotaExtenso}) cada uma, totalmente 
    integralizado em moeda corrente desse país. `

    const nameClasula = new Paragraph({
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
        after: 200
      }
    });
    const clasula = new Paragraph({
    
      children: [

        new TextRun({
          text: 'CLASULA SEGUNDA: ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: textClasula ,
          font: {
            name: 'Arial'
          },
          size: 24
        }) 
      
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400
      }
    });

    const capital = new Paragraph({
    
      children: [

        new TextRun({
          text: 'Parágrafo único: O capital social fica assim distribuído entre os sócios: ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
       
      
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400
      }
    });

    const capitalTabela = new Table({
      alignment: AlignmentType.CENTER,     
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        tableSocios.headerTabela(),
        tableSocios.sociosTabela(),
        tableSocios.footerTabela()
      ],
     
    })
    
    const clasulasTerceira = new Paragraph ({
      children: [

        new TextRun({
          text: 'CLAUSULA TERCEIRA: ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: 'As quotas são indivisíveis e não poderão ser cedidas ou transferidas a terceiros sem consentimento do(s) outro(s) sócio(s), a quem fica assegurado, em igualdade de condições e preço direto de preferência para aquisição, se postas à venda, formalizando, se realizada a cessão delas, a alteração contratual pertinente.' ,
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
    const clasulasQuarta = new Paragraph ({
      children: [

        new TextRun({
          text: 'CLAUSULA QUARTA: ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: 'A responsabilidade de cada socio é restrita as suas quotas, mas todos respondem solidariamente pela integralização do capital social.' ,
          font: {
            name: 'Arial'
          },
          size: 24,
        }),
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400
      }
    })

    
    
    
    
    return {nameClasula,clasula,capital, capitalTabela,clasulasTerceira,clasulasQuarta}
  }

}