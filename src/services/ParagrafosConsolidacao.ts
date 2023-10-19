import {data} from '../tests/data_test'
import {Paragraph, TextRun, AlignmentType, Table, BorderStyle, WidthType} from 'docx'
import { TableSocios } from './TableSocios'
const tableSocios = new TableSocios()


export default class ParagrafoConsolidacao extends TableSocios{
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

  nomeEmpresarial(){
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
        before: 800
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
        after: 400,
        before: 400
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
  objetoSocialEPrazo(){

    const titulo = new Paragraph({
      children: [

        new TextRun({
          text: 'DO OBJETO SOCIAL E PRAZO DE DURAÇÃO',
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
          text: 'A sociedade tem por objeto(s) social(ais):' ,
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
    const clasulaSexta = new Paragraph({
      children: [

        new TextRun({
          text: 'CLAUSULA SEXTA: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `A empresa iniciou suas atividades em ${data.dadosEmpresa.inicioAtividades} e seu prazo de duração é indeterminado.`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before:400,
      }
    });
   
    
    return {titulo,clasulaQuinta,descricaoAtividade,codificacaoAtividade,cnaeAtividade,clasulaSexta}
  }
  administracaoProLabore(){
    const tituloClasula = new Paragraph({
      children: [

        new TextRun({
          text: 'DA ADMINISTRAÇÃO E DO PRÓ-LABORE',
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
    const clasulaSetima = new Paragraph({
      children:[
        new TextRun({
          text: 'CLAUSULA SETIMA: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `A administração da sociedade caberá ${data.dadosEmpresa.tipoAdministracao} ao Sócio(a) ${data.dadosEmpresa.socioAdministrador} com os poderes e atribuições de representação ativa e passiva na sociedade, judicial e extrajudicialmente, podendo praticar todos os atos compreendidos no objeto social, sempre de interesse da sociedade, autorizado o uso do nome empresarial, vedado, no entanto, fazê-lo em atividades estranhas ao interesse social ou assumir obrigações seja em favor de qualquer dos cotistas ou de terceiros, bem como onerar ou alienar bens imóveis da sociedade, sem autorização do(s) outros(s) sócio(s).`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }
      
    })

    return {tituloClasula, clasulaSetima}
  }
  balancoLucrosPerdas(){
    const tituloClasula = new Paragraph({
      children: [

        new TextRun({
          text: 'DO BALANÇO PATRIMONIAL DOS LUCROS E PERDAS',
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
    const clasulaOitava = new Paragraph({
      children:[
        new TextRun({
          text: 'CLAUSULA OITAVA: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `Ao término de cada exercício social, em 31 de dezembro, o administrador prestará contas justificadas de sua administração, procedendo à elaboração do inventário, do balanço patrimonial e do balanço de resultado econômico, cabendo aos sócios, na proporção de suas quotas, os lucros ou perdas apuradas.`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }
      
    })
    const paragrafoUnico = new Paragraph({
      children:[
        new TextRun({
          text: 'Parágrafo único: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `A empresa por resolução de seu titular poderá distribuir resultados em períodos inferiores ao anual, desde que levanto o resultado em balanço contábil especial para o período.`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }

    })
    return {tituloClasula, clasulaOitava,paragrafoUnico}

  }
  declaracaoDesempedimento(){
    const tituloClasula = new Paragraph({
      children: [

        new TextRun({
          text: 'DA DECLARAÇÃO DE DESIMPEDIMENTO',
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
    const clasulaNona = new Paragraph({
      children:[
        new TextRun({
          text: 'CLAUSULA NONA: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `O(s) Administrador(es) declara(m), sob as penas da lei, que não está impedido de exercer a administração da sociedade, por lei especial ou em virtude de condenação criminal, ou por se encontrar sob os efeitos dela, a pena que vede ainda que temporariamente, o acesso a cargos públicos, ou por crime falimentar, de prevaricação, peita ou suborno,
          concussão, peculato ou contra a economia popular, contra o financeiro nacional, contra normas de defesa da concorrência, contra as relações de consumo, fé pública ou propriedade.
          `,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }
      
    })
    
    return {tituloClasula, clasulaNona}

  }
  falecimentoSocio(){
    const tituloClasula = new Paragraph({
      children: [

        new TextRun({
          text: 'DA DECLARAÇÃO DE DESIMPEDIMENTO',
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
    const clasulaDecima = new Paragraph({
      children:[
        new TextRun({
          text: 'CLAUSULA DECIMA: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `Falecendo ou interditado qualquer sócio, a sociedade continuará sua atividade com os herdeiros ou sucessores. Não sendo possível ou inexistindo interesse destes ou do(s) sócio(s) remanescente(s), o valor de seus haveres será apurado e liquidado com base na situação patrimonial da sociedade, à data da resolução verificado em balanço especialmente levantado.`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }
      
    })
    const paragrafoUnico = new Paragraph({
      children:[
        new TextRun({
          text: 'Parágrafo único: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `O mesmo procedimento será adotado em outros casos em que a sociedade se resolve em relação ao seu sócio.`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }

    })
    
    return {tituloClasula, clasulaDecima, paragrafoUnico}

  }
  foro(){
    const tituloClasula = new Paragraph({
      children: [

        new TextRun({
          text: 'FORO',
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
    const clasulaDecimaPrimeira = new Paragraph({
      children:[
        new TextRun({
          text: 'CLAUSULA DÉCIMA PRIMEIRA: ',
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
        new TextRun({
          text: `Fica eleito o foro do ${data.dadosEmpresa.foro} para exercício e o cumprimento dos direitos e obrigações resultantes desse contrato.`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }
      
    })
    
    return {tituloClasula, clasulaDecimaPrimeira}

  }
  finalContrato(){
    const acordado = new Paragraph({
      children: [

        new TextRun({
          text: 'E, por estarem assim juntos e contratados, lavram junto este instrumento.',
          font: {
            name: 'Arial',
          }, 
          size: 24,
        }) 

      ],
      alignment: AlignmentType.CENTER,
      spacing: {
        before: 400,
        after: 400,
      }
    });
    const estadoData = new Paragraph({
      children:[
        new TextRun({
          text: `Rio de janeiro, ______ de ____________ de _____.`,
          font: {
            name: 'Arial',
          }, 
          size: 24,
          bold: true,
        }),
      ],
      alignment: AlignmentType.BOTH,
      spacing: {
        after: 400,
        before: 400
      }
      
    })
    
    return {acordado, estadoData}

  }
  assinaturas(){
    const primeiroSocio = new Paragraph({
      children: [
        new TextRun({
          text: `____________________________________`
        }),
        new TextRun({
          text: '',
          break: 1
        }),
        new TextRun({
          text: data.dadosSocio.nome,
          bold:true,
          size: 24,
          font: 'Arial'
        }),
        
      ],
      spacing: {
        before: 1600,
      }
    })
    return primeiroSocio
  }
  
}