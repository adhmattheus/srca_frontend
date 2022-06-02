import { Tabela } from './styles'
import { useEffect, useState } from 'react'
import api from '../../../lib/api'

export function ListaAgendamentos() {

  const [listAgendamentos, setListAgendamentos] = useState([]);

  useEffect(() => {
    async function getAgendamentos() {
      const response = await api.get('https://jsonplaceholder.typicode.com/users')
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

  // const  = listAgendamentos.map((agendamento) => {
  //   return
  //   <div>
  //     <p>{agendamento.id}</p>
  //     <p>{user.name}</p>
  //   </div>
  // })

  return (
<p>ok</p>
    
    //   <Tabela>
    //   <table>

    //     <tr>
    //       <th>Id</th>
    //       <th>Nome</th>
    //       <th>Campus</th>
    //       <th>Setor</th>
    //       <th>Categoria</th>
    //       <th>Agendamento</th>
    //       <th>Status</th>
    //     </tr>
    //     <tr>
    //       <td>1</td>
    //       <td>Mattheus Adhonnay</td>
    //       <td>Petrolina</td>
    //       <td>SRCA</td>
    //       <td>Matrícula</td>
    //       <td>2022-06-15 15:00</td>
    //       <td>Não atendido</td>
    //     </tr>
    //   </table>
    // </Tabela>



  )
}







