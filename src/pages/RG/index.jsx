import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './RG.scss';
import rg from '../../img/rg.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

import { useNavigate } from "react-router-dom";

function RG() {
  const [frenteRgLoaded, setFrenteRgLoaded] = useState(false)
  const [versoRgLoaded, setVersoRgLoaded] = useState(false)

  const navigate = useNavigate();
  const cancelAction = () => {  
    navigate("/admissao");
  }

  const handleCaptureFrente = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
          document.querySelector('#frenteRgImg').src = readerTarget.result;
          document.querySelector('#frenteRgImg').style.display = 'block'
          setFrenteRgLoaded(true)
        
      })
      reader.readAsDataURL(file)
    } else {
      setFrenteRgLoaded(false)
    }
  }
  const handleCaptureVerso = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        document.querySelector('#versoRgImg').src = readerTarget.result;
        document.querySelector('#versoRgImg').style.display = 'block'
        setVersoRgLoaded(true)
          
        
      })
      reader.readAsDataURL(file)
    } else {
      setVersoRgLoaded(false)
      
    }
  }
  return (
    <>
        <Logo />
        <div className='containerFoto'>
            <h2>Dados RG</h2>
            <div className="content">
                <form action="">
                  <TextField type="tel" id="txt_rg" label="Número do RG" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']} >
                      <DatePicker label="Data de Emissão" className="dataInput"/>
                    </DemoContainer>
                  </LocalizationProvider>
                  <TextField id="txt_orgEmissor" label="Orgão Emissor" variant="outlined"/>
                  <TextField id="txt_estadoEmissor" label="Estado Emissor" variant="outlined"/>

                </form>
                <div className="frenteRg">
                  {!frenteRgLoaded && <img src={rg} alt=""/>}
                  <div className='imgPreview'>
                    <img src={rg} alt="" id="frenteRgImg" style={{display: 'none'}}/>
                  </div>
                  <br />
                  {!frenteRgLoaded &&(
                    <>
                      <h3>Envie seu RG</h3>
                      <p>Tire uma foto da frente do seu documento.</p>
                    </>
                  )}
                  <br />
                  <CameraFunctions funcao={handleCaptureFrente}/>  
                </div>
                <br />
                {frenteRgLoaded &&(
                  <div className="frenteRg">
                    {!versoRgLoaded && <img src={rg} alt=""/>}
                    <div className='imgPreview'>
                      <img src={rg} alt="" id="versoRgImg" style={{display: 'none'}}/>
                    </div>
                    <br />
                    {!versoRgLoaded &&(
                      <p>Agora tire uma foto do verso do seu documento.</p>
                    )}
                    <br />
                    <CameraFunctions funcao={handleCaptureVerso}/>
                  </div>
                )}
   
            </div>            
        </div>
        <footer>
          <BtnActions cancelFuncion={cancelAction} saveFunction={cancelAction} /> 
        </footer>
    </>
  );
}

export default RG;