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

  const tabelaAgendamentos = listAgendamentos.agendamentos?.map((agendamento, data) => {
    return (
      <div>
        <Tabela>
          <table>

            <tr>
              {/* <th>Id</th>
              <th>Nome</th> */}
              <th>Campus</th>
              <th>Setor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>{agendamento.campus}</td>
              <td>{agendamento.categoria}</td>
              <td>SRCA</td>
              <td>2022-06-15 15:00</td>
              <td>Não atendido</td>
            </tr>
          </table>
        </Tabela>
      </div>
    )
  })

  return (
    tabelaAgendamentos
  )
}







