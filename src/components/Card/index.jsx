import React from 'react';
import './DependenteCard.scss'
import editIcon from '../../icons/editIcon.svg'
import deleteIcon from '../../icons/deleteIcon.svg'

// import { Container } from './styles';

function Card() {
    return(
        <div className='dependCard'>
            <div className='infoDependCard'>
                <p>Dependente 01</p>
                <h3>Teste</h3>
            </div>
            <div className='btnActionsBox'>
                <button><img src={editIcon} alt="" /></button>
                <button><img src={deleteIcon} alt="" /></button>
            </div>
        </div>
    );
}

export default Card;