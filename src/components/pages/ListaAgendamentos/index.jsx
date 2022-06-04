import { Tabela } from './styles'
import { useEffect, useState } from 'react'
import api from '../../../lib/api'

export function ListaAgendamentos() {

  const [listAgendamentos, setListAgendamentos] = useState([]);

  useEffect(() => {
    async function getAgendamentos() {
      await api.get('/agendamentos')
        .then(response => {
          setListAgendamentos(response.data)
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    };
    getAgendamentos();
  }, []);

  return (
    <Tabela>
      <table>
        <tr>
          <th>Campus</th>
          <th>Setor</th>
          <th>Atendimento</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
        {listAgendamentos.agendamentos?.map((agendamento, data) => {
          return (
            <tr>
              <td>{agendamento.campus}</td>
              <td>{agendamento.setor}</td>
              <td>{agendamento.categoria}</td>
              <td>{agendamento.dataAgendamento}</td>
              <td>{agendamento.statusAgendamento}</td>
            </tr>
          )
        })}
      </table>
    </Tabela>
  )
}







