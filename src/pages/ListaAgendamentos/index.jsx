import { zonedTimeToUtc } from 'date-fns-tz';
import { Tabela, Container, Calendario, ContainerFiltros } from './styles'
import { useCallback, useEffect, useState } from 'react'
import api from '../../lib/api'
import ptBR from 'date-fns/locale/pt-BR';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { useTable } from 'react-table';
import { useMemo } from 'react';

export function ListaAgendamentos() {

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [listAgendamentos, setListAgendamentos] = useState([]);
  const [listAgendamentosAux, setListAgendamentosAux] = useState([]);

  const [checkCampus, setcheckCampus] = useState(false);
  const [checkSetor, setcheckSetor] = useState(false);
  const [checkAtendimento, setcheckAtendimento] = useState(false);


  // const handleDateChange = useCallback((dataAgendamento) => {
  //   setSelectedDay(dataAgendamento)
  // }, [])

  // useEffect(() => {
  //   async function getAgendamentos() {
  //     await api.get(`/agendamentos/${format(selectedDay, 'yyyy-MM-dd')}`)

  //       .then(response => {

  //         const dados = response.data.agendamentos.map(agendamento => ({
  //           ...agendamento,
  //           dataAgendamento: (zonedTimeToUtc(agendamento.dataAgendamento, 'America/Sao_Paulo')).toLocaleDateString(),
  //           horaAgendamento: (zonedTimeToUtc(agendamento.dataAgendamento, 'America/Sao_Paulo')).toLocaleTimeString()
  //         }));
  //         setListAgendamentos(dados)
  //         setListAgendamentosAux(dados)


  //         // const campus = dados.filter(agendamento => agendamento.campus === "Juazeiro")
  //         // console.log(campus)



  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   };

  //   getAgendamentos();
  // }, [selectedDay]);

  // function checkOrdenaCampus(event) {
  //   setcheckCampus(event);
  // }

  // function checkOrdenaSetor(event) {
  //   setcheckSetor(event);
  // }
  // function checkOrdenaAtendimento(event) {
  //   setcheckAtendimento(event);
  // }

  // useEffect(() => {

  //   // if (checkSetor) {
  //   //   const listAgendamentosOrdemSetor = [...listAgendamentos]
  //   //     .sort((a, b) => a.setor.toLowerCase() > b.setor.toLowerCase() ? 1 : -1)

  //   //   setListAgendamentos(listAgendamentosOrdemSetor);
  //   // } else {
  //   //   setListAgendamentos(listAgendamentosAux)
  //   // }

  //   if (checkSetor && checkCampus) {
  //     const listAgendamentosOrdemSetor = [...listAgendamentos]
  //       .sort((a, b) => a.setor.toLowerCase() > b.setor.toLowerCase() ? 1 : -1)
  //       .sort((a, b) => a.campus.toLowerCase() > b.campus.toLowerCase() ? 1 : -1)

  //     setListAgendamentos(listAgendamentosOrdemSetor);
  //   } else {
  //     setListAgendamentos(listAgendamentosAux)
  //   }

  //   // if (checkCampus && checkSetor && checkAtendimento) {
  //   //   const listAgendamentosOrdemCampus = [...listAgendamentos]
  //   //     .sort((c, d) => c.campus.toLowerCase() < d.campus.toLowerCase() ? 1 : -1)
  //   //     .sort((e, f) => e.setor.toLowerCase() < f.setor.toLowerCase() ? 1 : -1)
  //   //     .sort((g, h) => g.categoria.toLowerCase() < h.categoria.toLowerCase() ? 1 : -1)

  //   //   setListAgendamentos(listAgendamentosOrdemCampus);
  //   // } else {
  //   //   setListAgendamentos(listAgendamentosAux)
  //   // }

  // }, [checkSetor, checkCampus])


  // useEffect(() => {
  //   if (checkCampus) {
  //     const listAgendamentosOrdemCampus = [...listAgendamentos]
  //       .sort((a, b) => a.campus.toLowerCase() > b.campus.toLowerCase() ? 1 : -1)

  //     setListAgendamentos(listAgendamentosOrdemCampus);
  //   }
  //   else {
  //     setListAgendamentos(listAgendamentosAux)
  //   }
  // }, [checkCampus])


  // useEffect(() => {
  //   if (checkAtendimento) {
  //     const listAgendamentosOrdemCampus = [...listAgendamentos]
  //       .sort((a, b) => a.categoria.toLowerCase() > b.categoria.toLowerCase() ? 1 : -1)

  //     setListAgendamentos(listAgendamentosOrdemCampus);
  //   }
  //   else {
  //     setListAgendamentos(listAgendamentosAux)
  //   }
  // }, [checkAtendimento])


  const data = useMemo(() =>
    [
      {
        name: 'Kim Parrish',
        address: '4420 Valley Street, Garnerville, NY 10923',
        date: '07/11/2020',
        order: '87349585892118',
      },
      {
        name: 'Michele Castillo',
        address: '637 Kyle Street, Fullerton, NE 68638',
        date: '07/11/2020',
        order: '58418278790810',
      },
      {
        name: 'Eric Ferris',
        address: '906 Hart Country Lane, Toccoa, GA 30577',
        date: '07/10/2020',
        order: '81534454080477',
      },
      {
        name: 'Gloria Noble',
        address: '2403 Edgewood Avenue, Fresno, CA 93721',
        date: '07/09/2020',
        order: '20452221703743',
      },
      {
        name: 'Darren Daniels',
        address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
        date: '07/07/2020',
        order: '22906126785176',
      },
      {
        name: 'Ted McDonald',
        address: '796 Bryan Avenue, Minneapolis, MN 55406',
        date: '07/07/2020',
        order: '87574505851064',
      },
    ],
    []
  )
  const columns = useMemo(
    () => [
      {
        Header: 'User Info',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Address',
            accessor: 'address',
          },
        ],
      },
      {
        Header: 'Order Info',
        columns: [
          {
            Header: 'Date',
            accessor: 'date',
          },
          {
            Header: 'Order #',
            accessor: 'order',
          },
        ],
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })



  return (


    <Container>
<table>
  
</table>
      {/* <h2>Lista de Agendamentos</h2>

      <Calendario>
        <DayPicker
          mode="single"
          locale={ptBR}
          modifiers={{
            available: { dayOfWeek: [1, 2, 3, 4, 5] },
            disabled: { dayOfWeek: [6] }
          }}
          selected={selectedDay}
          onSelect={setSelectedDay}
          onDayClick={handleDateChange}
        />

      </Calendario>

      {listAgendamentos.length === 0 ? <h2>sem agendamentos para este dia</h2> : (
        <>
          <ContainerFiltros>
            <div>
              <label htmlFor="scales">Campus:</label>
              <input type="checkbox" id="Campus" name="Campus" checked={checkCampus} onChange={e => checkOrdenaCampus(e.target.checked)} />
            </div>

            <div>
              <label htmlFor="scales">Setor:</label>
              <input type="checkbox" id="Setor" name="Setor" checked={checkSetor} onChange={e => checkOrdenaSetor(e.target.checked)} />
            </div>

            <div>
              <label htmlFor="scales">Atendimento:</label>
              <input type="checkbox" id="Atendimento" name="Atendimento" checked={checkAtendimento} onChange={e => checkOrdenaAtendimento(e.target.checked)} />
            </div>

            <div>
              <label htmlFor="scales">Curso:</label>
              <input type="checkbox" id="Curso" name="Curso" />
            </div>
          </ContainerFiltros>


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
        </>
      )} */}


    </Container>



  );
}