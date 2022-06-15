import { zonedTimeToUtc } from 'date-fns-tz';
import { Tabela, Container, Calendario, ContainerFiltros } from './styles'
import { useCallback, useEffect, useState } from 'react'
import api from '../../lib/api'
import ptBR from 'date-fns/locale/pt-BR';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export function ListaAgendamentos() {

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [listAgendamentos, setListAgendamentos] = useState([]);


  const handleDateChange = useCallback((dataAgendamento) => {
    setSelectedDay(dataAgendamento)
  }, [])

  useEffect(() => {
    async function getAgendamentos() {
      await api.get(`/agendamentos/${format(selectedDay, 'yyyy-MM-dd')}`)

        .then(response => {

          const dados = response.data.agendamentos.map(agendamento => ({
            ...agendamento,
            dataAgendamento: (zonedTimeToUtc(agendamento.dataAgendamento, 'America/Sao_Paulo')).toLocaleDateString(),
            horaAgendamento: (zonedTimeToUtc(agendamento.dataAgendamento, 'America/Sao_Paulo')).toLocaleTimeString()
          }));
          setListAgendamentos(dados)
        })
        .catch(err => {
          console.log(err)
        })
    };
    getAgendamentos();
  }, [selectedDay]);


  return (
    <>

      <Container>

        <h2>Lista de Agendamentos</h2>

        <Calendario>
          <DayPicker
            mode="single"
            locale={ptBR}
            modifiers={{
              available: { dayOfWeek: [1, 2, 3, 4, 5] },
              disabled: { dayOfWeek: [0, 6] }
            }}
            selected={selectedDay}
            onSelect={setSelectedDay}
            onDayClick={handleDateChange}
          />
        </Calendario>

        <ContainerFiltros>
          <div>
            <label for="scales">Campus:</label>
            <input type="checkbox" id="Campus" name="Campus" />
          </div>

          <div>
            <label for="scales">Setor:</label>
            <input type="checkbox" id="Setor" name="Setor" />
          </div>

          <div>
            <label for="scales">Atendimento:</label>
            <input type="checkbox" id="Atendimento" name="Atendimento" />
          </div>

          <div>
            <label for="scales">Curso:</label>
            <input type="checkbox" id="Curso" name="Curso" />
          </div>



        </ContainerFiltros>
        {listAgendamentos.length === 0 && <h2>sem agendamentos para este dia</h2>}

        <Tabela>

          <thead>
            <tr>
              <th>Campus</th>
              <th>Setor</th>
              <th>Atendimento</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>



            {listAgendamentos.map((agendamento, data) => {

              return (

                <tr key={data}>
                  <td>{agendamento.campus}</td>
                  <td>{agendamento.setor}</td>
                  <td>{agendamento.categoria}</td>
                  <td>{agendamento.dataAgendamento}</td>
                  <td>{agendamento.horaAgendamento}</td>
                  <td>{agendamento.statusAgendamento}</td>
                </tr>

              )
            })}
          </tbody>
        </Tabela>
      </Container>

    </>

  );
}