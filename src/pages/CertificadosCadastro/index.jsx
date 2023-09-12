import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './CertificadosCadastro.scss';
import fotoImg from '../../img/foto.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';
import TextField from '@mui/material/TextField';

function CertificadosCadastro() {
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
        <div className='containerCertificado'>
            <h2>Certificados</h2>
            <div className="content">
                <img src={fotoImg} alt="" id="imgPreview" style={{display: 'none'}}/>
                <p>Observações sobre os certificados que devem ser anexados.</p>
                <h3>Anexar Certificado</h3>
                <br />
                <CameraFunctions funcao={handleCapture}/>
                <br />
                <TextField
                  id="txt_obs_certificado"
                  label="Observações"
                  multiline
                  rows={4}
                  defaultValue=""
                  fullWidth
                />
            </div>            
        </div>
        <footer>
          <BtnActions />  
        </footer>
    </>
  );
}

export default CertificadosCadastro;