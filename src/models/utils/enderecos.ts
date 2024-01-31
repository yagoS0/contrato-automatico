import data from '../../tests/data_test'
export const enderecoEstabelecimento = `${data.contratoSocial.endereco.rua},${data.contratoSocial.endereco.numero} - 
    ${data.contratoSocial.endereco.complemento} - ${data.contratoSocial.endereco.estado}/${data.contratoSocial.endereco.cidade}
    - ${data.contratoSocial.endereco.cep}`

export const enderecoNovo = `${data.alteracao.endereco.rua},${data.alteracao.endereco.numero} - 
    ${data.alteracao.endereco.complemento} - ${data.alteracao.endereco.estado}/${data.alteracao.endereco.cidade}
    - ${data.alteracao.endereco.cep}`