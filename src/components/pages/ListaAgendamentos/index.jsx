import { Tabela } from './styles'
import Agendamento from '../Agendamento/index'

export function ListaAgendamentos() {
  return (

    <Tabela>
      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Campus</th>
          <th>Setor</th>
          <th>Categoria</th>
          <th>Agendamento</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Mattheus Adhonnay</td>
          <td>Petrolina</td>
          <td>SRCA</td>
          <td>Matrícula</td>
          <td>2022-06-15 15:00</td>
          <td>Não atendido</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sebastião Casca de pinha</td>
          <td>Paulo Afonso</td>
          <td>PROAE</td>
          <td>Entrega de documentos</td>
          <td>2022-08-23 15:30</td>
          <td>Atendido</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ledarno Chuponis</td>
          <td>Juazeiro</td>
          <td>SRCA</td>
          <td>Entrega de diploma</td>
          <td>2022-06-05 12:00</td>
          <td>Não atendido</td>
        </tr>
        </table>
    </Tabela >
  )

}