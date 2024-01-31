import {Paragraph, TextRun, AlignmentType, Table, WidthType} from 'docx'
import data from '../tests/data_test'
import TableSocios  from '../models/utils/TableSocios'
import {enderecoEstabelecimento, enderecoNovo} from '../models/utils/enderecos'

const tableSocios = new TableSocios()

 class ClasulaAlteracao{
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
                text: data.contratoSocial.nomeEmpresarial.razaoSocial,
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

  dadosSocios(): Paragraph[]{
    const dadosSocios: Paragraph[] = [] 
    data.contratoSocial.dadosSocios.forEach((socio, index) => {
      const dadosSocio = new Paragraph({
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
      dadosSocios.push(dadosSocio)
  
    })
    return dadosSocios
  }

  descricaoEmpresa():  Paragraph{
    const descricaoEmpresa = new Paragraph({
      
      children: [
   
        new TextRun({
          text: `Sócios da sociedade limitada de nome empresarial ${data.contratoSocial.nomeEmpresarial.razaoSocial}, constituída legalmente por contrato social devidamente arquivado na Junta Comercial do Estado de ${data.geral.foro}, sob NIRE nº ${data.geral.nire}, com sede ${enderecoEstabelecimento}, devidamente inscrita no Cadastro Nacional de Pessoa Jurídica sob o nº${data.geral.cnpj}, deliberam de pleno e comum acordo ajustarem a presente alteração contratual, nos termos da Lei n° 10.406/ 2002, mediante as condições estabelecidas nas cláusulas seguintes:`,
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
    return descricaoEmpresa
  }
   
  nomeEmpresarialAlteracao(): Paragraph[]{
    const alteracaoNomeEmpresarial =  new Paragraph({
      
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

    const clausulaAlteracaoNomeEmpresarial  =  new Paragraph({
    
      children: [
   
        new TextRun({
          text: `CLÁUSULA /* entrar numero da clasula*/  `,
          bold: true,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
        new TextRun({
          text: `A sociedade que gira sob o nome empresarial ${data.contratoSocial.nomeEmpresarial.razaoSocial}, girará, a partir da data do arquivamento, sob o nome empresarial ${data.alteracao.nomeEmpresarial.razaoSocial}.`,
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

    return [alteracaoNomeEmpresarial,clausulaAlteracaoNomeEmpresarial]
  }

  enderecaoAlteracao(): Paragraph[]{
    const alteracaoEndereco =  new Paragraph({
      
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

    const clausulaAlteracaoEndereco  =  new Paragraph({
      
      children: [
   
        new TextRun({
          text: `CLÁUSULA numero da clausula  `,
          bold: true,
          size: 24,
          font: {
            name: 'Arial'
          }
        }),
        new TextRun({
          text: `A sociedade que vinha exercendo suas atividades no endereço sito à ${enderecoEstabelecimento}, passa a fazê-lo no seguinte endereço sito à ${enderecoNovo}`,
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

    return [alteracaoEndereco,clausulaAlteracaoEndereco]
  }

  atividadeAlteracao(){
    const alteracaoObjetoSocial = new Paragraph({
      children: [
  
        new TextRun({
          text: 'ALTERACAO DO OBJETO SOCIAL',
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
    const calsulaAlteracaoObjetoSocial = new Paragraph({
    
      children: [
        new TextRun({
          text: 'CLASULA numero clasula: ' ,
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
          text: data.alteracao.objetoSocial.descricaoAtividade,
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
    
    return [alteracaoObjetoSocial,calsulaAlteracaoObjetoSocial,descricaoAtividade,codificacaoAtividade]
  }

  capitalSocialAlteracao(){
    const capitalSocial = new Paragraph({
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
    const clasulaCapitalSocial = new Paragraph({
    
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
          text: `O capital social que era de R$ ${data.contratoSocial.capitalSocial.capital} (${data.alteracao.capitalSocial.capital} reais), passa a ser de R$ ${data.alteracao.capitalSocial.capital}. (${data.alteracao.capitalSocial.capital} reais) representado por ${data.alteracao.capitalSocial.quotas}(${data.alteracao.capitalSocial.valorQuotas}) quotas de capital, no valor nominal de R$ ${data.alteracao.capitalSocial.valorQuotas} (${data.alteracao.capitalSocial.valorQuotas} real) cada uma, cujo aumento é totalmente subscrito e integralizado, neste ato, em moeda corrente nacional, pelos sócios. Em decorrência do aumento de capital social, este fica assim distribuído:` ,
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
    

    

    const capitalSocialTabela = new Table({
      alignment: AlignmentType.CENTER,     
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: tableSocios.create(data)
      
     
    })
    
    const responsabilidadeDosSocios = new Paragraph ({
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
    return [capitalSocial,clasulaCapitalSocial,capitalSocialTabela, responsabilidadeDosSocios]
  }

  consolidacaoContrato(){
    const consolidacao = new Paragraph({
      children: [

        new TextRun({
          text: 'DA CONSOLIDAÇÃO DO CONTRATO' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
      
      ],
      alignment: AlignmentType.CENTER,
      spacing: {
        before: 800
      }
    })
    const clasulaConsolidacaoContrato = new Paragraph ({
      children: [

        new TextRun({
          text: 'CLÁUSULA TERCEIRA:' ,
          font: {
            name: 'Arial'
          },
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: ' Tendo em vista as inúmeras alterações contratuais ocorridas, e havendo a necessidade de consolidação das cláusulas contratuais, os sócios decidem aprovar o seguinte texto, revogando quaisquer dispositivos anteriores que conflitem com o ora aprovado: ' ,
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

    const tituloConsolidacao = new Paragraph({
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
            text: data.contratoSocial.nomeEmpresarial.razaoSocial,
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
    return [consolidacao, clasulaConsolidacaoContrato, tituloConsolidacao]
  }

 }

export default ClasulaAlteracao