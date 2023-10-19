import {Paragraph, TextRun, AlignmentType, Table, BorderStyle, WidthType} from 'docx'
import {data} from '../tests/data_test'
import { TableSocios } from './TableSocios'

const tableSocios = new TableSocios()

export default class ParagrafoAlteracao {
  titulo(){
    const titulo = new Paragraph({
      children: [
        new TextRun({
          text: 'ALTERACAO CONTRATUAL',
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
   
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 600
      },
      
        
    })
    return dadosSocio
  }
  descricaoEmpresa(){
    const enderecoEscabelecimento = `${data.dadosEmpresa.endereco.rua},${data.dadosEmpresa.endereco.numero} - 
    ${data.dadosEmpresa.endereco.complemento} - ${data.dadosEmpresa.endereco.estado}/${data.dadosEmpresa.endereco.cidade}
    - ${data.dadosEmpresa.endereco.cep}`

    return new Paragraph({
      
      children: [
   
        new TextRun({
          text: `Sócios da sociedade limitada de nome empresarial ${data.razaoSocial}, constituída legalmente por contrato social devidamente arquivado na Junta Comercial do Estado de ${data.dadosEmpresa.foro}, sob NIRE nº ${data.dadosEmpresa.nire}, com sede ${enderecoEscabelecimento}, devidamente inscrita no Cadastro Nacional de Pessoa Jurídica sob o nº${data.dadosEmpresa.cnpj}, deliberam de pleno e comum acordo ajustarem a presente alteração contratual, nos termos da Lei n° 10.406/ 2002, mediante as condições estabelecidas nas cláusulas seguintes:`,
          bold: false,
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
  }

  alteracaoNomeEmpresarial(){

    const titulo =  new Paragraph({
      
      children: [
   
        new TextRun({
          text: `NOME EMPRESARIAL`,
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

    const clausula  =  new Paragraph({
      
      children: [
   
        new TextRun({
          text: `CLÁUSULA ${data.alteracoes.nomeEmpresarial.numeroClasula}  `,
          bold: true,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
        new TextRun({
          text: `A sociedade que gira sob o nome empresarial ${data.razaoSocial}, girará, a partir da data do arquivamento, sob o nome empresarial ${data.alteracoes.nomeEmpresarial.novoNome}.`,
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
    return {titulo, clausula}
  }

  alteracaoEndereco(){
    const enderecoAntigo = `${data.alteracoes.endereco.antigoEndereco.rua}
    ${data.alteracoes.endereco.antigoEndereco.numero}
    ${data.alteracoes.endereco.antigoEndereco.complemento}
    ${data.alteracoes.endereco.antigoEndereco.estado}/
    ${data.alteracoes.endereco.antigoEndereco.cidade} - 
    ${data.alteracoes.endereco.antigoEndereco.cep}
    `
    const enderecoNovo = `${data.dadosEmpresa.endereco.rua},${data.dadosEmpresa.endereco.numero} - 
    ${data.dadosEmpresa.endereco.complemento} - ${data.dadosEmpresa.endereco.estado}/${data.dadosEmpresa.endereco.cidade}
    - ${data.dadosEmpresa.endereco.cep}`
    const titulo =  new Paragraph({
      
      children: [
   
        new TextRun({
          text: `ALTERAÇÃO DE ENDEREÇO`,
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

    const clausula  =  new Paragraph({
      
      children: [
   
        new TextRun({
          text: `CLÁUSULA ${data.alteracoes.endereco.numeroClasula}  `,
          bold: true,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
        new TextRun({
          text: `A sociedade que vinha exercendo suas atividades no endereço sito à ${enderecoAntigo}, passa a fazê-lo no seguinte endereço sito à ${enderecoNovo}`,
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
    return {titulo, clausula}
  }
 
  objetoSocial(){

    const titulo = new Paragraph({
      children: [

        new TextRun({
          text: 'OBJETO SOCIAL',
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
    const clasulaQuinta = new Paragraph({
    
      children: [
        new TextRun({
          text: 'CLASULA QUINTA: ' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: 'A sociedade passa a ter o seguinte objeto social: ' ,
          font: {
            name: 'Arial'
          }, 
          size: 24
        }),

        
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        before: 400,
        after: 400,
      }
    });

    const descricaoAtividade = new Paragraph({
      children: [
        new TextRun({
          text: data.dadosEmpresa.atividade.descricaoAtividade,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }), 
        

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 200
      }
      
    })
    const codificacaoAtividade = new Paragraph({
      children: [
        new TextRun({
          text: 'Codificação das Atividades Econômicas:',
          font: {
            name: 'Arial'
          },
          size: 24
        }), 
       
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 200
      }
    })

    const cnaeAtividade = new Paragraph({
      children: [
        new TextRun({
          text: `${data.dadosEmpresa.atividade.numeroCnae} - `,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold:true
        }),   
        new TextRun({
          text: `${data.dadosEmpresa.atividade.descricaoCnae}`,
          font: {
            name: 'Arial'
          },
          size: 24,
        }), 
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 200
      }
    })
    return {titulo,clasulaQuinta,descricaoAtividade,codificacaoAtividade,cnaeAtividade}
  }
  aumentoCapitalSocial(){
    const textClasula = `
    O capital social que era de R$ ${data.alteracoes.capitalSocial.antigoCapital} (${data.alteracoes.capitalSocial.antigoCapitalExtenso} reais), 
    passa a ser de R$ ${data.alteracoes.capitalSocial.novoCapital}. (${data.alteracoes.capitalSocial.novoCapitalExtenso} reais) representado por  
    ${data.alteracoes.capitalSocial.quotas}(${data.alteracoes.capitalSocial.valorQuotaExtenso}) quotas de capital, 
    no valor nominal de R$ ${data.alteracoes.capitalSocial.valorQuotas} (${data.alteracoes.capitalSocial.valorQuotaExtenso} real) cada uma,
    cujo aumento é totalmente subscrito e integralizado, neste ato,
    em moeda corrente nacional, pelos sócios. Em decorrência do aumento de capital social, 
    este fica assim distribuído:    `

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
        before: 800
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
        after: 400,
        before: 400
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
    
    const paragrafoUnico = new Paragraph ({
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
          text: 'A responsabilidade dos sócios é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social, na forma do art. 1052 da Lei 10.406/02. Cada quota é indivisível e confere a seu titular o direito a voto nas deliberações sociais. ' ,
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

    return {nameClasula,clasula, capitalTabela, paragrafoUnico}
  }

}