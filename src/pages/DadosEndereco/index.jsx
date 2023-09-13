import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './DadosEndereco.scss';
import comprovResidImg from '../../img/comprovResid.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';

import TextField from '@mui/material/TextField';
import AutocompleteInput from '../../components/Autocomplete';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

function DadosEndereco() {
  const [comprovResid, setComprovResid] = useState(false)
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [uf, setUF] = useState('')
  const [localidade, setLocalidade] = useState('')

  const navigate = useNavigate();
  const cancelAction = () => {  
    navigate("/admissao");
  }

  const ufsBrasil = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  const handleCapture = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
          document.querySelector('#comprovResidImg').src = readerTarget.result;
          document.querySelector('#comprovResidImg').style.display = 'block'
          setComprovResid(true)
        
      })
      reader.readAsDataURL(file)
    } else {
      setComprovResid(false)
    }
  }

  const buscarCEP = async (cep) => {
      const data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => {return res.data})
          .catch(() => {return 'Falha'})
      if(data !== "Falha"){
        console.log(data);
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setUF(data.uf)
        setLocalidade(data.localidade)
      }
  }

  return (
    <>
        <Logo />
        <div className='containerFoto'>
            <h2>Dados do Endereço</h2>
            <div className="content">
                <form action="">
                  <TextField type="tel" id="txt_tipoEnd" label="Tipo de Endereço" variant="outlined"/>
                  <TextField type="tel" id="txt_cep" label="CEP" variant="outlined" inputmode="numeric" pattern="[0-9]*" onBlur={(e) => buscarCEP(e.target.value)}/>
                  <TextField value={logradouro} id="txt_tipoLogradouro" label="Tipo de Logradouro" variant="outlined"/>
                  <TextField type="tel" id="txt_numEnd" label="Número" variant="outlined"/>
                  <TextField id="txt_complemento" label="Complemento" variant="outlined"/>
                  <TextField value={bairro} id="txt_bairro" label="Bairro" variant="outlined"/>
                  <AutocompleteInput value={uf} dados={ufsBrasil} label="Estado (UF)" id="ztxt_uf_resid"/>
                  <TextField value={localidade} id="txt_municipio" label="Município" variant="outlined"/>

                </form>
                <div className="frenteRg">
                  {!comprovResid && <img src={comprovResidImg} alt=""/>}
                  <div className='imgPreview'>
                    <img src={comprovResidImg} alt="" id="comprovResidImg" style={{display: 'none'}}/>
                  </div>
                  <br />
                  {!comprovResid &&(
                    <>
                      <p>Tire uma foto de um documento de comprovante de endereço válido (conta de água, luz, etc.)</p>
                    </>
                  )}
                  <br />
                  <CameraFunctions funcao={handleCapture}/>  
                </div>
                <br />
              
   
            </div>            
        </div>
        <footer>
        <BtnActions cancelFuncion={cancelAction} saveFunction={cancelAction} /> 
        </footer>
    </>
  );
}

export default DadosEndereco;


// MuiFormLabel-root
// MuiInputLabel-root 
// MuiInputLabel-formControl 
// MuiInputLabel-animated 
// MuiInputLabel-shrink 
// MuiInputLabel-outlined 
// MuiFormLabel-colorPrimary 
// MuiFormLabel-filled 
// MuiInputLabel-root 
// MuiInputLabel-formControl 
// MuiInputLabel-animated 
// MuiInputLabel-shrink 
// MuiInputLabel-outlined 
// css-1jy569b-MuiFormLabel-root-MuiInputLabel-root