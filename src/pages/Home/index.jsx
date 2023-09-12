import React from 'react';
import Logo from '../../components/Logo';
import './Home.scss'
import Switcher from '../../components/Switcher';
import admissaoIcon from '../../icons/admissaoIcon.svg'
import certificadoIcon from '../../icons/certificadoIcon.svg'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
            <Logo />
            <div className='container'>
                <h2>Menu</h2>
                <Link to='/admissao'>
                    <Switcher icon={admissaoIcon} name={'Admissão Padrão'} progress={20} />
                </Link>
                <Link to='/certificados'>
                    <Switcher icon={certificadoIcon} name={'Certificados'} progress={60} />
                </Link>
               
            </div>
        </>
    );
}

export default Home;