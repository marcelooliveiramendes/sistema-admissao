import React from 'react';
import './BtnActions.scss'

import Button from '@mui/material/Button';

function BtnActions({cancelFuncion, saveFunction}) {
  return (
    <div className="btnBox">
        <Button variant="outlined" onClick={cancelFuncion} size="large" className={'btnVoltar'}>
            Voltar
        </Button>
        <Button variant="contained" onClick={saveFunction} size="large"  className={'btnSalvar'}>
            Salvar
        </Button>
    </div>
  );
}

export default BtnActions;