import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './Reservista.scss';
import reservistaImg from '../../img/Reservista.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';

import TextField from '@mui/material/TextField';

function Reservista() {
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
            <h2>Reservista</h2>
            <div className="content">
                <form action="">
                  <TextField type="tel" id="txt_numReservista" label="Número da Reservista" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                </form>
                {!tituloLoaded && <img src={reservistaImg} alt=""/>}
                <div className='imgPreview'>
                  <img src={reservistaImg} alt="" id="tituloImg" style={{display: 'none'}}/>
                </div>
                <br />
                {!tituloLoaded &&(
                  <>
                    <p>Tire uma foto da sua reservista aberta</p>
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

export default Reservista;