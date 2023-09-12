import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './Foto.scss';
import fotoImg from '../../img/foto.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';

function Foto() {
  const [imgCarregada, setImgCarregada] = useState(false)

  const handleCapture = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        document.querySelector('#imgPreview').src = readerTarget.result;
        document.querySelector('#imgPreview').style.display = 'block'
        setImgCarregada(true)
      })
      reader.readAsDataURL(file)
    } else {
      setImgCarregada(false)
    }
  }
  return (
    <>
        <Logo />
        <div className='containerFoto'>
            <h2>Foto</h2>
            <div className="content">
                {!imgCarregada && <img src={fotoImg} alt=""/>}
                <img src={fotoImg} alt="" id="imgPreview" style={{display: 'none'}}/>
                <br />
                <h3>Envie sua foto</h3>
                <p>Tire uma foto de perfil em um ambiente de iluminação adequada.</p>
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

export default Foto;