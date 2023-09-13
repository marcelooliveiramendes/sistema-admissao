import React, { useState } from 'react';
import './Certificados.scss'

import Logo from '../../components/Logo';
import addIcon from '../../icons/add.svg'

import { Link } from 'react-router-dom';
import Card from '../../components/Card';

import { useNavigate } from "react-router-dom";


function Certificados() {
    const navigate = useNavigate();
    const cancelAction = () => {  
        navigate("/admissao");
    }

    return (
        <>
            <Logo />
            <div className='containerCertificados'>
                <h2>Certificados</h2>
                <div className="content">
                    <div className="cadastroCertif">
                        <p>
                            Observações sobre os certificados que devem ser anexados.
                        </p>
                        <Link to='/certificados-cadastro' className='btnCadastrarNovoDep'>
                            <button><img src={addIcon} alt="" /> Adicionar</button>
                        </Link>    

                    </div>
                    

                    <div className="certificados">
                        <Card />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Certificados;