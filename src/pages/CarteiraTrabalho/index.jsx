import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './CarteiraTrabalho.scss';
import carteiraTrabalho from '../../img/carteiraTrabalho.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import AutocompleteInput from '../../components/Autocomplete';

function CarteiraTrabalho() {
  const [carteiraInfo, setCarteiraInfo] = useState(false)
  const [qualifCivil, setQualifCivil] = useState(false)

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

  const handleCaptureFrente = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
          document.querySelector('#carteiraInfoImg').src = readerTarget.result;
          document.querySelector('#carteiraInfoImg').style.display = 'block'
          setCarteiraInfo(true)
        
      })
      reader.readAsDataURL(file)
    } else {
      setCarteiraInfo(false)
    }
  }
  const handleCaptureVerso = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        document.querySelector('#qualifCivilImg').src = readerTarget.result;
        document.querySelector('#qualifCivilImg').style.display = 'block'
        setQualifCivil(true)
          
        
      })
      reader.readAsDataURL(file)
    } else {
      setQualifCivil(false)
      
    }
  }
  return (
    <>
        <Logo />
        <div className='containerFoto'>
            <h2>Carteira de Trabalho</h2>
            <div className="content">
                <form action="">
                  <TextField id="txt_carteiraProfissional" label="Carteira profissional" variant="outlined"/>
                  <TextField id="txt_serieCarteiraProfissional" label="Série da carteira" variant="outlined" />
                  <TextField type="tel" id="txt_numPIS" label="Número do PIS" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']} >
                      <DatePicker label="Data de emissão do CTPS" className="dataInput"/>
                    </DemoContainer>
                  </LocalizationProvider>
                  <AutocompleteInput dados={ufsBrasil} label="Estado (UF)"/>

                </form>
                <div className="frenteRg">
                  {!carteiraInfo && <img src={carteiraTrabalho} alt=""/>}
                  <div className='imgPreview'>
                    <img src={carteiraTrabalho} alt="" id="carteiraInfoImg" style={{display: 'none'}}/>
                  </div>
                  <br />
                  {!carteiraInfo &&(
                    <>
                      <p>Tire uma foto da página que contenha <strong>número</strong> e <strong>série</strong></p>
                    </>
                  )}
                  <br />
                  <CameraFunctions funcao={handleCaptureFrente}/>  
                </div>
                <br />
                {carteiraInfo &&(
                  <div className="frenteRg">
                    {!qualifCivil && <img src={carteiraTrabalho} alt=""/>}
                    <div className='imgPreview'>
                      <img src={carteiraTrabalho} alt="" id="qualifCivilImg" style={{display: 'none'}}/>
                    </div>
                    <br />
                    {!qualifCivil &&(
                      <p>Tire uma foto da página que contenha <strong>qualificação civil</strong> </p>
                    )}
                    <br />
                    <CameraFunctions funcao={handleCaptureVerso}/>
                  </div>
                )}
   
            </div>            
        </div>
        <footer>
          <BtnActions /> 
        </footer>
    </>
  );
}

export default CarteiraTrabalho;