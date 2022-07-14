import { Route, Routes } from 'react-router-dom';
import { Agendamento } from './pages/Agendamento';
import { HomePage } from './pages/HomePage';
import { ListaAgendamentos } from './pages/ListaAgendamentos';
import { Login } from './pages/LoginPage';

const Rotas = () => (

    <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="home" element={<HomePage />} />
        <Route path="agendar" element={<Agendamento />} />
        <Route path="listaagendamentos" element={<ListaAgendamentos />} />
    </Routes>

);

export default Rotas;