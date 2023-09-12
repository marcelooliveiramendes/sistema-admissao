import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './TituloEleitoral.scss';
import titulo from '../../img/titulo.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';

import TextField from '@mui/material/TextField';

function TituloEleitor() {
  const [tituloLoaded, setTituloLoaded] = useState(false)

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
                  <TextField type="tel" id="txt_tituloEleitor" label="Nº título de eleitor" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                </form>
                {!tituloLoaded && <img src={titulo} alt=""/>}
                <div className='imgPreview'>
                  <img src={titulo} alt="" id="tituloImg" style={{display: 'none'}}/>
                </div>
                <br />
                {!tituloLoaded &&(
                  <>
                    <h3>Envie seu título de eleitor</h3>
                    <p>Tire uma foto de seu documento aberto.</p>
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

export default TituloEleitor;