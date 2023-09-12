const getLocalUserData = () => {
    let valores = []
    let dadosPessoais = JSON.parse(localStorage.getItem("dadosPessoais")) 
    let foto = JSON.parse(localStorage.getItem("camposTeste")) 
    let rg = JSON.parse(localStorage.getItem("camposTeste")) 
    let tituloEleitor = JSON.parse(localStorage.getItem("camposTeste")) 
    let comprovNascCasamento = JSON.parse(localStorage.getItem("camposTeste")) 
    let CarteiraTrabalho = JSON.parse(localStorage.getItem("camposTeste")) 
    let cnh = JSON.parse(localStorage.getItem("camposTeste")) 
    let certificadoReservista = JSON.parse(localStorage.getItem("camposTeste")) 
    let dadosEndereco = JSON.parse(localStorage.getItem("camposTeste")) 
    let dependentes = JSON.parse(localStorage.getItem("camposTeste")) 

    if(dadosPessoais != null){
        valores.push(calcularPercentualPreenchido(dadosPessoais))
    } else {
        valores.push(0)
    }

    return valores
}

function calcularPercentualPreenchido(objeto) {
    // Obtém todas as chaves (campos) do objeto
    const chaves = Object.keys(objeto);
  
    // Conta o número de campos preenchidos
    const camposPreenchidos = chaves.reduce((total, chave) => {
      if (objeto[chave] !== null && objeto[chave] !== undefined && objeto[chave] !== '') {
        return total + 1;
      }
      return total;
    }, 0);
  
    // Calcula o percentual de campos preenchidos
    const percentualPreenchido = (camposPreenchidos / chaves.length) * 100;
  
    return percentualPreenchido;
  }

export default getLocalUserData;