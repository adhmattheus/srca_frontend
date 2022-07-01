import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Agendamento } from './pages/Agendamento';
import { ListaAgendamentos } from './pages/ListaAgendamentos';

const Rotas = () => (

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="agendar" element={<Agendamento />} />
        <Route path="listaagendamentos" element={<ListaAgendamentos />} />
    </Routes>

);

export default Rotas;