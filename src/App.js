
import GlobalStyle from './styles/global'
// import { Header } from './components/Header';
import { Agendamento } from './pages/Agendamento';
import { HomePage } from './pages/HomePage';
import { ListaAgendamentos } from './pages/ListaAgendamentos';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      {/* <ListaAgendamentos /> */}
      <Agendamento />
      {/* <HomePage /> */}

    </>

  );
}

export default App;