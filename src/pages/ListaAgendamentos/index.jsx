import { zonedTimeToUtc } from 'date-fns-tz';
import { Tabela, Container, Calendario, ContainerFiltros, Tabela2 } from './styles'
import { useCallback, useEffect, useState } from 'react'
import api from '../../lib/api'
import ptBR from 'date-fns/locale/pt-BR';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { useSortBy, useTable } from 'react-table';
import { useMemo } from 'react';

export function ListaAgendamentos() {

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [listAgendamentos, setListAgendamentos] = useState([]);
  // const [listAgendamentosAux, setListAgendamentosAux] = useState([]);

  // const [checkCampus, setcheckCampus] = useState(false);
  // const [checkSetor, setcheckSetor] = useState(false);
  // const [checkAtendimento, setcheckAtendimento] = useState(false);


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
          console.log(dados)
          // setListAgendamentosAux(dados)

          // const campus = dados.filter(agendamento => agendamento.campus === "Juazeiro")
          // console.log(campus)
        })
        .catch(err => {
          console.log(err)
        })
    };

    getAgendamentos();
  }, [selectedDay]);

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

  const columns = useMemo(
    () => [
      {
        Header: 'Campus',
        accessor: 'campus',
        sortType: 'basic'
      },
      {
        Header: 'Setor',
        accessor: 'setor',
        sortType: 'basic'
      },

      {
        Header: "Atendimento",
        accessor: 'categoria',
        sortType: 'basic'
      },
      {
        Header: 'Data',
        accessor: "dataAgendamento",
        sortType: 'basic'
      },
      {
        Header: 'Horário',
        accessor: "horaAgendamento",
        sortType: 'basic'
      },
      {
        Header: 'Status',
        accessor: "statusAgendamento",
        sortType: 'basic'
      },
    ],
    []
  )

  const {
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: listAgendamentos }, useSortBy)


  return (

    <Container>

      <h2>Lista de Agendamentos</h2>

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
          {/* <ContainerFiltros>
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
          </ContainerFiltros> */}

          <Tabela2>
            <table>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (column.isSortedDesc ? ' ' : ' ') : ''}
                        </span>
                      </th>
                    ))}

                  </tr>
                ))}
              </thead>
              <tbody

                {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Tabela2>
        </>
      )}
    </Container>
  );
}