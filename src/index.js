import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admissao from './pages/Admissao';
import DadosPessoais from './pages/DadosPessoais';
import Foto from './pages/Foto';
import RG from './pages/RG';
import TituloEleitor from './pages/TituloEleitoral';
import CertidaoCasamento from './pages/CertidaoCasamento';
import CarteiraTrabalho from './pages/CarteiraTrabalho';
import CNH from './pages/CNH';
import Reservista from './pages/Reservista';
import DadosEndereco from './pages/DadosEndereco';
import Dependentes from './pages/Dependentes';
import DependentesCadastro from './pages/DependentesCadastro';
import Certificados from './pages/Certificados';
import CertificadosCadastro from './pages/CertificadosCadastro';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Home />}/>
          <Route path='/admissao' element={<Admissao />}/>
          <Route path='/dados-pessoais' element={<DadosPessoais />}/>
          <Route path='/rg' element={<RG />}/>
          <Route path='/foto' element={<Foto />}/>
          <Route path='/titulo-eleitor' element={<TituloEleitor />}/>
          <Route path='/certidao-casamento' element={<CertidaoCasamento />}/>
          <Route path='/carteira-trabalho' element={<CarteiraTrabalho />}/>
          <Route path='/cnh' element={<CNH />}/>
          <Route path='/reservista' element={<Reservista />}/>
          <Route path='/comprovante-residencia' element={<DadosEndereco />}/>
          <Route path='/dependentes' element={<Dependentes />}/>
          <Route path='/dependentes-cadastro' element={<DependentesCadastro />}/>
          <Route path='/certificados' element={<Certificados />}/>
          <Route path='/certificados-cadastro' element={<CertificadosCadastro />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
