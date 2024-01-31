interface IData{
  dadosSocios: {
      nome : string,
      porcentagemCapital: number,
      nacionalidade: string,
      nascimento:string,
      qualificacao: string,
      estadoCivil :string,
      cpf: string,
      identidade: string,
      orgaoExpeditor: string,
        endereco: {
        rua: string,
        numero: string,
        complemento: string,
        estado: string,
        cidade: string,
        cep: string
        }
    }[],
  capitalSocial: {
    capital: number,
    quotas: number,
    valorQuotas: number,
  },
  nomeEmpresarial: {
    razaoSocial: string,
    nomeFantasia: string,
  },
  endereco: {
    rua: string,
    numero: string,
    complemento: string,
    estado: string,
    cidade: string,
    cep: string,
  },
  objetoSocial: {
    descricaoAtividade: string,
    atividades: 
     {
        numeroCnae: string,
        descricaoCnae: string
      }[],
  }
}

export default IData