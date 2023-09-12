import React from 'react';
import './Logo.scss'
import logo from '../../img/logo.svg'

function Logo() {
    return (
        <div className='logoContainer'>
            <img src={logo} alt="" />
        </div>
    );
}

export default Logo;