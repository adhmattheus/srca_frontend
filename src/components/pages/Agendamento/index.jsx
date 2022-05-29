import { Container, Agenda, Calendario, ContentBotao } from './styles'
import { DayPicker } from 'react-day-picker';
import { useState, useEffect } from 'react';
import 'react-day-picker/dist/style.css';
import ptBR from 'date-fns/locale/pt-BR';
import { format, } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import api from '../../../lib/api'
import Modal from 'react-modal';

export function Agendamento() {

  const customStyles = {
    content: {
      width: '30%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      alignItems: 'center'
    },
  };



  const [selectedDay, setSelectedDay] = useState(new Date());



  const [agendamento, setAgendamento] = useState({
    atendimento: '',
    setor: '',
    campus: '',
    dataAgendamento: selectedDay,
    horario: ''
  });

  const data = format(selectedDay, "yyyy-MM-dd");
  const hora = agendamento.horario;

  const agendamentoData = { data, hora }










  const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setIsOpen(false);
  }

  // const dataAgendamento = 



  useEffect(() => {
    setAgendamento({ ...agendamento, dataAgendamento: selectedDay }

    );
  }, [selectedDay])

  const onChangeAgendamento = e =>
    setAgendamento({ ...agendamento, [e.target.name]: e.target.value });

  // const schema = Yup.object().shape({
  //   antendimento: Yup.string().required('selecione o tipo do atendimento'),
  //   setor: Yup.string().required('selecione o setor'),
  //   campus: Yup.string().required('selecione campus'),
  // });



  const Submit = async (e) => {
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

    // await api.post('./agendamentos', {
    //   estudanteId: '97e67e57-e3fd-41c1-a918-df7acdce9ce3',
    //   campus: agendamento.campus,
    //   setor: agendamento.setor,
    //   categoria: agendamento.atendimento,
    //   dataAgendamento: selectedDay
    // })
    //   .then(response => {
    //     console.log(response); setIsOpen(true);
    //   })
    //   .catch(console.log('erro'))

    console.log(agendamentoData)


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
            <br /><br />
            <label>

              Horário:
              <select name="horario" value={agendamento.horario} onChange={onChangeAgendamento}>
                <option value="" disabled hidden>Selecione</option>
                <option value="14:00">14:00</option>
                <option value="14:20">14:20</option>
                <option value="14:40">14:40</option>
                <option value="15:00">15:00</option>
                <option value="15:20">15:20</option>
                <option value="15:40">15:40</option>
                <option value="16:00">16:00</option>
                <option value="16:20">16:20</option>
                <option value="16:40">16:40</option>

              </select>
            </label>
          </form>
        </Agenda>

        <Calendario>
          <DayPicker
            mode="single"
            locale={ptBR}
            fromMonth={new Date()}
            // onDayClick={dataSelecionada}
            modifiers={{
              available: { dayOfWeek: [1, 2, 3, 4, 5] },
              disabled: { dayOfWeek: [6] }
            }}

            selected={selectedDay}
            onSelect={setSelectedDay}





          />
        </Calendario>

      </Container>

      <ContentBotao>

        <button type="submit" onClick={(Submit)}>Agendar</button>
        <button type="submit">Cancelar</button>

        {/* <button type="submit" onClick={(openModal)}>Modal</button> */}

      </ContentBotao>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        <h2>Agendamento realizado com sucesso!</h2>
        <button onClick={closeModal}>Confirmar</button>
      </Modal>

    </>
  )
}