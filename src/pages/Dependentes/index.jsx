import React, { useState } from 'react';
import './Dependentes.scss'

import Logo from '../../components/Logo';
import addIcon from '../../icons/add.svg'

import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';


function Dependentes() {
    
    return (
        <>
            <Logo />
            <div className='containerDependentes'>
                <h2>Dependentes</h2>
                <div className="content">
                    <form action="">
                        <TextField type="tel" id="txt_tituloEleitor" label="Nome do novo dependente" variant="outlined"/>
                        <Link to='/dependentes-cadastro' className='btnCadastrarNovoDep'>
                            <button><img src={addIcon} alt="" /> Adicionar</button>
                        </Link>    
                    </form>

                    <div className="dependentes">
                        <Card />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Dependentes;