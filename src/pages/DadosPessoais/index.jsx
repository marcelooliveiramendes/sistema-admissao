import React, { useEffect, useState } from 'react';
import './DadosPessoas.scss'

import Logo from './../../components/Logo/index';
import AutocompleteInput from '../../components/Autocomplete';

import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import BtnActions from '../../components/BtnActions';

import { useNavigate } from "react-router-dom";

function DadosPessoais() {
    const [dadosPaises, setDadosPaises] = useState()
    const [nascExterior, setNascExterior] = useState(false)
    const [possuiDefic, setPossuiDefic] = useState(false)
    const [dados, setDados] = useState('')

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => {
              const countries = data.map(country => country.name.common);
              setDadosPaises(countries);
            })
            .catch(error => console.error(error));
    }, []);

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

    const grauDeInstrucaoRais = [
      "Analfabeto",
      "Até 5ª Incompleto",
      "5ª Completo Fundamental",
      "6ª a 9ª Fundamental Incompleto",
      "Fundamental Completo",
      "Médio Incompleto",
      "Médio Completo",
      "Superior Incompleto",
      "Superior Completo",
      "Mestrado",
      "Doutorado",
    ];
    const estadosDoBrasil = [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ];

    const cancelAction = () => {  
      window.location.href ='/admissao'
    }

    const navigate = useNavigate();

    const saveData = () => {
      let campos = {
        cpf: document.querySelector('#txt_cpf').value,
        nomeCompleto: document.querySelector('#txt_nomeCompleto').value,
        email: document.querySelector('#txt_email').value,
        nomeMae: document.querySelector('#txt_nomeMae').value,
        nomePai: document.querySelector('#txt_nomePai').value,
        sexo: document.querySelector('#slc_sexo').textContent,
        raca: document.querySelector('#slc_raca').textContent,
        estadoCivil: document.querySelector('#slc_estadoCivil').textContent,
        nacionalidade: document.querySelector('#ztxt_nacionalidade').value
      }

      if(document.querySelector('#swt_nascExterior').checked){
        campos = {
          ...campos, 
          nascExterior: document.querySelector('#swt_nascExterior').checked,
          paisNacionalidade: document.querySelector('#ztxt_paisNacionalidade').value,
          estadoNaturalidade: document.querySelector('#ztxt_estadoNaturalidade').value,
          municipioNaturalidade: document.querySelector('#txt_municipioNasc').textContent,
          grauInstrucao: document.querySelector('#ztxt_grauInstrucao').value
        }
      }
      if(possuiDefic){
        campos = {
          ...campos, 
          possuiDeficiencia: possuiDefic,
          BRPDH: document.querySelector('#txt_BRPDH').value,
          tipoDefic: document.querySelector('#txt_tipoDefic').value,
          obsDefic: document.querySelector('#txt_obsDefic').value,
          tipoDeficESocial: document.querySelector('#txt_tipoDeficESocial').value,
          cotaDefic: document.querySelector('#swt_cotaDefic').checked
        }

      }

      localStorage.setItem('dadosPessoais', JSON.stringify(campos))

      console.log(JSON.parse(localStorage.getItem('dadosPessoais')))

      // navigate("/admissao");
    }

    const getDados = () => {
      let dadosLocal = JSON.parse(localStorage.getItem('dadosPessoais'))
      setDados(dadosLocal.estadoCivil)

      if(dadosLocal != null){
        document.querySelector('#txt_cpf').value = dadosLocal.cpf
        document.querySelector('#txt_nomeCompleto').value = dadosLocal.nomeCompleto
        document.querySelector('#txt_email').value = dadosLocal.email
        document.querySelector('#txt_nomeMae').value = dadosLocal.nomeMae
        document.querySelector('#txt_nomePai').value = dadosLocal.nomePai
        document.querySelector('#slc_sexo').textContent = dadosLocal.sexo
        document.querySelector('#slc_raca').textContent = dadosLocal.raca
        document.querySelector('#slc_estadoCivil').textContent = dadosLocal.estadoCivil
        document.querySelector('#ztxt_nacionalidade').value = dadosLocal.nacionalidade
        

      }
    }

    useEffect(() => {
      getDados()     
    }, [])
    

    return (
        <div>
            <Logo />
            <div className='container'>
                <h2>Dados pessoais</h2>
                <br />
                <form action="" id='formularioDadosPessoais'>
                    <TextField type="tel" id="txt_cpf" label="CPF" variant="outlined" inputMode="numeric" pattern="[0-9]*"/>
                    <TextField id="txt_nomeCompleto" label="Nome Completo" variant="outlined" />
                    <TextField id="txt_email" label="Email" variant="outlined" />
                    <TextField id="txt_nomeMae" label="Nome da Mãe" variant="outlined" />
                    <TextField id="txt_nomePai" label="Nome da Pai" variant="outlined" />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="slc_sexo"
                            label="Sexo"
                        >
                            <MenuItem value={10}>Masculino</MenuItem>
                            <MenuItem value={20}>Feminino</MenuItem>
                            <MenuItem value={30}>Prefiro não dizer</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Raça</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="slc_raca"
                            label="Raça"
                        >
                            <MenuItem value={10}>Branco(a)</MenuItem>
                            <MenuItem value={20}>Pardo(a)</MenuItem>
                            <MenuItem value={30}>Preto(a)</MenuItem>
                            <MenuItem value={30}>Amarelo(a)</MenuItem>
                            <MenuItem value={30}>Indígena</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Estado Civil</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="slc_estadoCivil"
                            label="Estado Civil"
                        >
                            <MenuItem value={'Solteiro(a)'}>Solteiro(a)</MenuItem>
                            <MenuItem value={'Casado(a)'}>Casado(a)</MenuItem>
                            <MenuItem value={'Separado(a)'}>Separado(a)</MenuItem>
                            <MenuItem value={'Divorciado(a)'}>Divorciado(a)</MenuItem>
                            <MenuItem value={'Viúvo(a)'}>Viúvo(a)</MenuItem>
                        </Select>
                    </FormControl>
                    <AutocompleteInput dados={dadosPaises} label="Nacionalidade" campoId='ztxt_nacionalidade'/>
                    <div className='swtBox' id="nascExteriorSwt">
                        <label htmlFor="">Brasileiro nascido no exterior?</label>
                        <FormControlLabel
                            control={<IOSSwitch id="swt_nascExterior" sx={{ m: 1 }} checked={nascExterior} onChange={() => setNascExterior(!nascExterior)}/>}
                            label=""
                        />

                    </div>
                    {nascExterior &&(
                      <div className="formNascExterior">
                        <AutocompleteInput dados={dadosPaises} label="País de Nacionalidade" campoId="ztxt_paisNacionalidade"/>
                        <AutocompleteInput dados={estadosDoBrasil} label="Estado (naturalidade)" campoId="ztxt_estadoNaturalidade"/>
                        <TextField id="txt_municipioNasc" label="Município de Nascimento (naturalidade)" variant="outlined" />
                        <AutocompleteInput dados={grauDeInstrucaoRais} label="Grau de Instrução (RAIS)" campoId="ztxt_grauInstrucao"/>

                      </div>
                    )}
                    <div className='swtBox' id="nascExteriorSwt">
                        <label htmlFor="">Possui deficiência?</label>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} checked={possuiDefic} onChange={() => setPossuiDefic(!possuiDefic)}/>}
                            label=""
                        />

                    </div>
                    {possuiDefic &&(
                      <div className="formNascExterior">
                        <TextField id="txt_BRPDH" label="BR/PDH" variant="outlined" />
                        <TextField id="txt_tipoDefic" label="Tipo de Deficiência" variant="outlined" />
                        <TextField
                          id="txt_obsDefic"
                          label="Observações sobre a deficiência"
                          multiline
                          maxRows={6}
                        />
                        <TextField id="txt_tipoDeficESocial" label="Tipo de Deficiência e-social" variant="outlined" />
                        <div className='swtBox' id="nascExteriorSwt">
                        <label htmlFor="">Cota de Deficiência?</label>
                        <FormControlLabel
                            control={<IOSSwitch id="swt_cotaDefic" sx={{ m: 1 }}/>}
                            label=""
                        />

                    </div>
                      </div>
                    )}
                    <BtnActions cancelFuncion={cancelAction} saveFunction={saveData}/>

                </form>
            </div>
        </div>
    );
}

export default DadosPessoais;

