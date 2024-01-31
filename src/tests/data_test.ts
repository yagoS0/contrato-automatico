const data = { 
  geral:{
    clasulasAlteracao: 5,
    clasulasConsolidacao: 11,
    nire: 8733520,
    cnpj: 10988397000125, 
    foro: 'RIO DE JANEIRO'
  },
  contratoSocial:{
    dadosSocios: [
      {
        nome : "YAGO ARAUJO DA SILVA",
        porcentagemCapital: 100,
        nacionalidade: "Brasileiro",
        nascimento:"12/12/2000",
        qualificacao: "Empresario",
        estadoCivil :"Solteiro",
        cpf: "12219079724",
        identidade: "308489327",
        orgaoExpeditor: "DETRAN-RJ",
          endereco: {
          rua: "estrada de jacarepagua",
          numero: "7655",
          complemento: "sala 219",
          estado: "Rio de Janeiro",
          cidade: "RJ",
          cep: "22753900"
          }
      },
     
    ],
    capitalSocial: {
      capital: 100000,
      quotas: 100000,
      valorQuotas: 1,
    },
    nomeEmpresarial: {
      razaoSocial: 'treinamento avancado ltda',
      nomeFantasia: 'treinamento avancado'
    },
    endereco: {
      rua: 'avenida tenente coronel muniz de aragao',
      numero: '83',
      complemento: 'Rua F, cs 73',
      estado: 'Rio de Janeiro',
      cidade: 'Rio de Janeiro',
      cep: '22765-006'
    },
    objetoSocial: {
      descricaoAtividade: 'Atividade de treino pesado',
      atividades: [
       {
          numeroCnae: '8277005',
          descricaoCnae: 'Complexo de treinamentos'
        }
      ]
    }
  },

  alteracao:{
    dadosSocios: [
      {
        nome : "YAGO ARAUJO DA SILVA",
        porcentagemCapital: 100,
        tipo: "saida",
        nacionalidade: "Brasileiro",
        nascimento:"12/12/2000",
        qualificacao: "Empresario",
        estadoCivil :"Solteiro",
        cpf: "12219079724",
        identidade: "308489327",
        orgaoExpeditor: "DETRAN-RJ",
          endereco: {
          rua: "estrada de jacarepagua",
          numero: "7655",
          complemento: "sala 219",
          estado: "Rio de Janeiro",
          cidade: "RJ",
          cep: "22753900"
          }
      },
      {
        
        nome : "LUCAS ARAUJO DA SILVA",
        tipo: 'entrada',
        porcentagemCapital: 50,
        nacionalidade: "Brasileiro",
        nascimento:"12/12/2000",
        qualificacao: "Empresario",
        estadoCivil :"Solteiro",
        cpf: "12219079724",
        identidade: "308489327",
        orgaoExpeditor: "DETRAN-RJ",
          endereco: {
          rua: "estrada de jacarepagua",
          numero: "7655",
          complemento: "sala 219",
          estado: "Rio de Janeiro",
          cidade: "RJ",
          cep: "22753900"
          }
      },
      {
        nome : "JOAO ARAUJO DA SILVA",
        tipo: 'entrada',
        porcentagemCapital: 50,
        nacionalidade: "Brasileiro",
        nascimento:"12/12/2000",
        qualificacao: "Empresario",
        estadoCivil :"Solteiro",
        cpf: "12219079724",
        identidade: "308489327",
        orgaoExpeditor: "DETRAN-RJ",
          endereco: {
          rua: "estrada de jacarepagua",
          numero: "7655",
          complemento: "sala 219",
          estado: "Rio de Janeiro",
          cidade: "RJ",
          cep: "22753900"
          }
      }
    ],
    capitalSocial: {
      capital: 200000,
      quotas: 200000,
      valorQuotas: 1,
    },
    nomeEmpresarial: {
      razaoSocial: 'empresa limitada ltda',
      nomeFantasia: 'empresa limitada'
    },
    endereco: {
      rua: 'Estrada de jacarepagua',
      numero: '7655',
      complemento: 'sala 219',
      estado: 'Rio de Janeiro',
      cidade: 'Rio de Janeiro',
      cep: '22753900'
    },
    objetoSocial: {
      descricaoAtividade: 'Aluguel de Auto moveis',
      atividades: [
       {
          numeroCnae: '82502-91',
          descricaoCnae: 'Aluguel de auto moveis'
        }
      ]
    }
  },
}
 

export default data