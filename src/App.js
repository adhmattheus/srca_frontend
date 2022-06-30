
import { Header } from './components/Header';
import { Agendamento } from './pages/Agendamento';
import GlobalStyle from './styles/global'
// import { ListaAgendamentos } from './pages/ListaAgendamentos';

function App() {
  return (
    <>
    <GlobalStyle/>
      <Header />
      {/* <ListaAgendamentos /> */}
      <Agendamento/>
    </>

  );
}

export default App;