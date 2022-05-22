import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { Container, Agenda, Calendario, ContentBotao } from './styles'
import { useState } from 'react';

export function Agendamento() {

  const [dataSelecionada, setdataSelecionada] = useState(new Date());


  const [agendamento, setAgendamento] = useState({
    atendimento: '',
    setor: '',
    campus: ''
  });

  const onChangeAgendamento = e =>
    setAgendamento({ ...agendamento, [e.target.name]: e.target.value });


  const Submit = (e) => {
    e.preventDefault();


    console.log({ agendamento });
  }

  // const data = {
  //     atendimento:
  //     setor:
  //     campus: 
  //     horario:
  //     dia:
  // }


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
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disableDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            months={['Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro'
            ]}

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