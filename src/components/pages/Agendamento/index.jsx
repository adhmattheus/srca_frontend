// import { format } from 'date-fns';
import { DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ptBR from 'date-fns/locale/pt-BR';
// import * as Yup from 'yup'

import { Container, Agenda, Calendario, ContentBotao } from './styles'
import { useCallback, useState } from 'react';

export function Agendamento() {

  const { selectedDate, setSelectedDate } = useState(new Date());

  const dataSelecionada = useCallback((day: Date, modifiers: DayModifiers) => {

    if (modifiers.available) {
      setSelectedDate(day);
    }

  }, []);

  const [agendamento, setAgendamento] = useState({
    atendimento: '',
    setor: '',
    campus: '',
    // data: '',
    // horario: ''
  });

  const onChangeAgendamento = e =>
    setAgendamento({ ...agendamento, [e.target.name]: e.target.value });

  // const schema = Yup.object().shape({
  //   antendimento: Yup.string().required('selecione o tipo do atendimento'),
  //   setor: Yup.string().required('selecione o setor'),
  //   campus: Yup.string().required('selecione campus'),
  // });


  const Submit = (e) => {
    e.preventDefault();

    // if (agendamento.atendimento === "") {
    //   alert('Selecione o tipo de atendimento')
    //   return;
    // }
    // if (agendamento.setor === "") {
    //   alert('Selecione o setor')
    //   return;
    // }
    // if (agendamento.campus === "") {
    //   alert('Selecione o campus')
    //   return;
    // }

    // const response = await api.post('./CriarAgendamentoService', agendamento)
    //   if (response.status ===  ) {

    // }



    console.log({ agendamento });
  }



  return (
    <>
      <Container>

        <Agenda>
          <h1>Faça seu agendamento</h1>

          <form onSubmit={Submit}>
            <label>
              Atendimento:
              <select name="atendimento" value={agendamento.atendimento} onChange={onChangeAgendamento}>
                <option value="" disabled hidden>Selecione</option>
                <option value="Matrícula">Matrícula</option>
                <option value="Entrega de diploma">Entrega de diploma</option>

              </select>
              <br /><br />
            </label>

            <label>
              Setor:
              <select name="setor" value={agendamento.setor} onChange={onChangeAgendamento}>
                <option value="" disabled hidden>Selecione</option>
                <option value="Proae">Proae</option>
                <option value="SRCA">SRCA</option>

              </select>
              <br /><br />
            </label>

            <label>
              Campus:
              <select name="campus" value={agendamento.campus} onChange={onChangeAgendamento}>
                <option value="" disabled hidden>Selecione</option>
                <option value="Petrolina">Petrolina</option>
                <option value="Juazeiro">Juazeiro</option>
                <option value="Paulo Afonso">Paulo Afonso</option>

              </select>
            </label>
          </form>
        </Agenda>

        <Calendario>
          <DayPicker
            mode="single"
            locale={ptBR}
            fromMonth={new Date()}
            onDayClick={dataSelecionada}
            modifiers={{
              available: { dayOfWeek: [1, 2, 3, 4, 5] },
              disabled: { dayOfWeek: [0, 6] }
            }}
            selected={selectedDate}






          />
        </Calendario>

      </Container>

      <ContentBotao>

        <button type="submit" onClick={(Submit)}>Agendar</button>

        <button type="submit">Cancelar</button>

      </ContentBotao>
    </>
  )
}