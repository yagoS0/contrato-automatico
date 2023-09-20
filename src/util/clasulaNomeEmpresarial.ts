


export  const clausulaNomeEmpresarial = async () =>{

  var novoNomeEmpresa = 'nome da Empresa nova'
  var nomeEmpresa = 'nome da empresa antigo'
  
  var alteraCaoNomeEmpresa = `<h1 style="font-family: 'ARIAL'; font-size: '12px'">NOME EMPRESARIAL</h1>
    <p>CLÁUSULA PRIMEIRA. A sociedade que gira sob o nome empresarial 
    </p> ${nomeEmpresa}<p>, girará, a partir da data do arquivamento, 
    sob o nome empresarial</p> ${novoNomeEmpresa} .`

  
  return alteraCaoNomeEmpresa
} 
