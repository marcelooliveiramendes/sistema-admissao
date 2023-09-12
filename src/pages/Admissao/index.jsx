import React, { useEffect } from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import Switcher from '../../components/Switcher';
import dadosPessoaisIcon from '../../icons/dadosPessoaisIcon.svg'
import fotoIcon from '../../icons/fotoIcon.svg'
import rgIcon from '../../icons/rgIcon.svg'
import Button from '@mui/material/Button';
import './Admissao.scss'
import getLocalUserData from '../../functions/getLocalUserData.js'

// import { Container } from './styles';

function Admissao() {
    useEffect(() => {
        getLocalUserData()
    
      
    }, [])
    

  return (
    <>
        <Logo />
        <div className='container'>
            <h2>Admissão Padrão</h2>
            <p>Precisamos de algumas informações sobre você. Para isso, tenha em mãos os seus documentos e de seu dependentes.</p>
            <br />
            <Link to='/dados-pessoais'>
                <Switcher icon={dadosPessoaisIcon} name={'Dados Pessoais'} progress={20} />
            </Link>
            <Link to='/foto'>
                <Switcher icon={fotoIcon} name={'Foto'} progress={20} />
            </Link>
            <Link to='/rg'>
                <Switcher icon={rgIcon} name={'RG'} progress={20} />
            </Link>
            <Link to='/titulo-eleitor'>
                <Switcher icon={rgIcon} name={'Título de Eleitor'} progress={20} />
            </Link>
            <Link to='/certidao-casamento'>
                <Switcher icon={rgIcon} name={'Comprovante de Nascimento ou Casamento'} progress={20} />
            </Link>
            <Link to='/carteira-trabalho'>
                <Switcher icon={rgIcon} name={'Carteira de Trabalho'} progress={20} />
            </Link>
            <Link to='/cnh'>
                <Switcher icon={rgIcon} name={'CNH'} progress={20} />
            </Link>
            <Link to='/reservista'>
                <Switcher icon={rgIcon} name={'Certificado de Reservista'} progress={20} />
            </Link>
            <Link to='/comprovante-residencia'>
                <Switcher icon={rgIcon} name={'Dados do Endereço'} progress={20} />
            </Link>
            <Link to='/dependentes'>
                <Switcher icon={rgIcon} name={'Dependentes'} progress={20} />
            </Link>

            <footer>
                <Link to='/' className={'btnVoltar'}>
                    <Button variant="contained" size="large" >
                        Voltar
                    </Button>

                </Link>
            </footer>
        </div>
    </>
  );
}

export default Admissao;