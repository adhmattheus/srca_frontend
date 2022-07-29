import { Route, Routes } from 'react-router-dom';
import { Agendamento } from './pages/Agendamento';
import { Cadastro } from './pages/Cadastro';
import { HomePage } from './pages/Home';
import { ListaAgendamentos } from './pages/ListaAgendamentos';
import { Login } from './pages/Login';

const Rotas = () => (

    <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="home" element={<HomePage />} />
        <Route path="agendar" element={<Agendamento />} />
        <Route path="listaagendamentos" element={<ListaAgendamentos />} />
        <Route path="cadastrarusuarios" element={<Cadastro />} />
    </Routes>

);

export default Rotas;