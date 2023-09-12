import React, { useState } from 'react';
import './DependentesCadastro.scss'

import Logo from '../../components/Logo';
import addIcon from '../../icons/add.svg'

import { styled } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AutocompleteInput from '../../components/Autocomplete';
import BtnActions from '../../components/BtnActions';

// import { Container } from './styles';

function DependentesCadastro() {
    const [tituloLoaded, setTituloLoaded] = useState(false)

    const tiposDeParentesco = [
        "Pai",
        "Mãe",
        "Filho",
        "Filha",
        "Avô",
        "Avó",
        "Neto",
        "Neta",
        "Irmão",
        "Irmã",
        "Tio",
        "Tia",
        "Primo",
        "Prima",
        "Sobrinho",
        "Sobrinha",
        "Padrinho",
        "Madrinha",
        "Afiliado",
        "Enteado",
        "Enteada",
        "Cunhado",
        "Cunhada",
        "Amigo",
        "Amiga",
        "Namorado",
        "Namorada",
        "Noivo",
        "Noiva",
        "Esposo",
        "Esposa"
      ];
    const tiposDependenteSF = [
        "Cônjuge",
        "Filho",
        "Filha",
        "Enteado",
        "Enteada",
        "Companheiro(a)",
        "Pai",
        "Mãe",
        "Avô",
        "Avó",
        "Neto",
        "Neta",
        "Irmão",
        "Irmã",
        "Primo",
        "Prima",
        "Sobrinho",
        "Sobrinha",
        "Tio",
        "Tia",
        "Padrinho",
        "Madrinha"
      ];
    const tiposDependenteIR = [
        "Cônjuge",
        "Filho(a)",
        "Enteado(a)",
        "Companheiro(a)",
        "Pais",
        "Avós",
        "Irmão(ã)",
        "Sobrinho(a)",
        "Tio(a)",
        "Primo(a)",
        "Genro",
        "Nora",
        "Padrasto",
        "Madrasta",
        "Curador Legal",
        "Tutor Legal"
      ];
    const tiposDependenteESocial = [
        "Cônjuge",
        "Filho(a)",
        "Enteado(a)",
        "Companheiro(a)",
        "Pais",
        "Avós",
        "Irmão(ã)",
        "Sobrinho(a)",
        "Tio(a)",
        "Primo(a)",
        "Genro",
        "Nora",
        "Padrasto",
        "Madrasta",
        "Curador Legal",
        "Tutor Legal",
        "Menor Aprendiz"
      ];

    const handleCapture = (e) => {
        const inputTarget = e.target
        const file = inputTarget.files[0]

        if(file){
            const reader = new FileReader();

            reader.addEventListener('load', (e) => {
                const readerTarget = e.target;
                document.querySelector('#tituloImg').src = readerTarget.result;
                document.querySelector('#tituloImg').style.display = 'block'
                setTituloLoaded(true)
                
            })
            reader.readAsDataURL(file)
        } else {
            setTituloLoaded(false)
        }
    }

    const IOSSwitch = styled((props) => (<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
    }));

    return (
        <>  
            <Logo />
            <div className='containerDependentesCadastro'>
                <h2>Novo dependente</h2>
                <div className="content">
                    <form action="">
                        <TextField type="tel" id="txt_cpf" label="CPF" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                        <TextField id="txt_nome_dependente" label="Nome" variant="outlined"/>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker']} >
                                <DatePicker label="Data de Nascimento" className="dataInput"/>
                            </DemoContainer>
                        </LocalizationProvider>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Sexo"
                            >
                                
                                <MenuItem value={10}>Masculino</MenuItem>
                                <MenuItem value={20}>Feminino</MenuItem>
                                <MenuItem value={30}>Prefiro não dizer</MenuItem>
                            </Select>
                        </FormControl>
                        <AutocompleteInput dados={tiposDeParentesco} label="Parentesco"/>
                        <AutocompleteInput dados={tiposDependenteSF} label="Tipo dependente SF"/>
                        <AutocompleteInput dados={tiposDependenteIR} label="Tipo dependente IR"/>
                        <AutocompleteInput dados={tiposDependenteESocial} label="Tipo dependente eSocial"/>
                        <div  className='swtBox'>
                            <label htmlFor="">Plano de Saúde?</label>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }}/>}
                                label=""
                            />
                        </div>
                    </form>

                </div>
                <footer>
                    <BtnActions />
                </footer>
            </div>
        </>
    );
}

export default DependentesCadastro;