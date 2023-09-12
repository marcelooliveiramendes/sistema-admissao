const getLocalUserData = () => {
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
        console.log("Tem sim po")
        console.log(dadosPessoais)
    } else {
        console.log("Não tem nada")
    }
}

export default getLocalUserData;