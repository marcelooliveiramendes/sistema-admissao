import React from 'react';
import './CameraFunctions.scss'

import Button from '@mui/material/Button';


function CameraFunctions({funcao}) {
    return (
        <div className='fotoContainer'>
            <Button
                variant="contained"
                component="label"
                className='btnPictureCapture'
            >
                Tirar Foto
                <input
                    type="file"
                    hidden
                    onChange={(e) => funcao(e)}
                />
            </Button>
            <Button
                variant="contained"
                component="label"
                className='btnImportFile'
            >
                Importar Arquivo
                <input
                    type="file"
                    hidden
                />
            </Button>
            
        </div>
    );
}

export default CameraFunctions;