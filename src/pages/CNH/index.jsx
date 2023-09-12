import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './CNH.scss';
import cnh from '../../img/cnh.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';

import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AutocompleteInput from '../../components/Autocomplete';

function CNH() {
  const [tituloLoaded, setTituloLoaded] = useState(false)
  const ufsBrasil = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
  ];
  const tiposHabilitacaoBrasil = [
    "A - Motocicleta",
    "B - Veículo motorizado, exceto motocicletas",
    "C - Veículos de carga com mais de 3.500 kg",
    "D - Veículos de transporte de passageiros, mais de 8 lugares",
    "E - Combinação de veículos (exige habilitação nas categorias C ou D)",
    "AB - Veículos motorizados das categorias A e B",
    "AC - Veículos motorizados das categorias A e C",
    "AD - Veículos motorizados das categorias A e D",
    "AE - Veículos motorizados das categorias A e E",
    "BC - Veículos motorizados das categorias B e C",
    "BD - Veículos motorizados das categorias B e D",
    "BE - Veículos motorizados das categorias B e E",
    "CD - Veículos motorizados das categorias C e D",
    "CE - Veículos motorizados das categorias C e E",
    "DE - Veículos motorizados das categorias D e E"
  ];

  const handleCapture = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
          document.querySelector('#tituloImg').src = readerTarget.result;
          document.querySelector('#tituloImg').style.display = 'block'
          setTituloLoaded(true)
        
      })
      reader.readAsDataURL(file)
    } else {
      setTituloLoaded(false)
    }
  }

  return (
    <>
        <Logo />
        <div className='containerFoto'>
            <h2>Título de Eleitor</h2>
            <div className="content">
                <form action="">
                  <TextField type="tel" id="txt_carteiraHabilitacao" label="Carteira de habilitação" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                  <TextField type="tel" id="txt_orgEmissoCNH" label="Orgão emissor CNH" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']} >
                      <DatePicker label="Data de emissão CNH" className="dataInput"/>
                    </DemoContainer>
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']} >
                      <DatePicker label="Data de validade CNH" className="dataInput"/>
                    </DemoContainer>
                  </LocalizationProvider>
                  <AutocompleteInput dados={tiposHabilitacaoBrasil} label="Categoria CNH"/>
                  <AutocompleteInput dados={ufsBrasil} label="Estado (UF)"/>
                </form>
                {!tituloLoaded && <img src={cnh} alt=""/>}
                <div className='imgPreview'>
                  <img src={cnh} alt="" id="tituloImg" style={{display: 'none'}}/>
                </div>
                <br />
                {!tituloLoaded &&(
                  <>
                    <p>Tire uma foto do documento CNH aberto.</p>
                  </>
                )}
                <br />
                <CameraFunctions funcao={handleCapture}/>
            </div>            
        </div>
        <footer>
          <BtnActions /> 
        </footer>
    </>
  );
}

export default CNH;