import { zonedTimeToUtc } from 'date-fns-tz';
import { Tabela, Container } from './styles'
import { useEffect, useState } from 'react'
import api from '../../lib/api'

export function ListaAgendamentos() {

  const [listAgendamentos, setListAgendamentos] = useState([]);

  useEffect(() => {
    async function getAgendamentos() {
      await api.get('/agendamentos')
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
  }, []);

  return (
    <>
      <Container>

        <h2>Lista de Agendamentos</h2>

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