import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './CertidaoCasamento.scss';
import certidaoImg from '../../img/certidao.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';
import { useNavigate } from "react-router-dom";

function CertidaoCasamento() {
  const [imgCarregada, setImgCarregada] = useState(false)
  const navigate = useNavigate();
  const cancelAction = () => {  
    navigate("/admissao");
  }

  const handleCapture = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        document.querySelector('#imgPreviewCertidao').src = readerTarget.result;
        document.querySelector('#imgPreviewCertidao').style.display = 'block'
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
            <h2>Certidão</h2>
            <br />
            <div className="content">
                {!imgCarregada && <img src={certidaoImg} alt=""/>}
                <img src={certidaoImg} alt="" id="imgPreviewCertidao" style={{display: 'none'}}/>
               
                <h3>Envie sua certidão</h3>
                <p>Tire uma foto do documento de certidão de nascimento ou casamento</p>
                <br />
                <CameraFunctions funcao={handleCapture}/>
            </div>            
        </div>
        <footer>
        <BtnActions cancelFuncion={cancelAction} saveFunction={cancelAction} />  
        </footer>
    </>
  );
}

export default CertidaoCasamento;