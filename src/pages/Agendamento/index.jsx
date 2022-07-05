/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Agenda, Calendario, ContentBotao, Container2, BtnCancelar, BtnAgendar, BtnConfirmar } from './styles'
import { DayPicker } from 'react-day-picker';
import { useState, useEffect } from 'react';
import 'react-day-picker/dist/style.css';
import ptBR from 'date-fns/locale/pt-BR';
import { format, } from 'date-fns';
import api from '../../lib/api'
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

export function Agendamento() {

  const navigate = useNavigate();

  // const customStyles = {
  //   content: {
  //     width: '30%',
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //     alignItems: 'center'
  //   },
  // };

  const [selectedDay, setSelectedDay] = useState('');

  const [agendamento, setAgendamento] = useState({
    atendimento: '',
    setor: '',
    campus: '',
    dataAgendamento: selectedDay,
    horario: ''
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {

    if (selectedDay) {
      const data = format(selectedDay, "yyyy-MM-dd");
      const hora = agendamento.horario;
      const agendamentoData = `${data}  ${hora}`;

      setAgendamento({
        ...agendamento,
        dataAgendamento: format(new Date(agendamentoData), 'yyyy-MM-dd HH:mm:ss').toString(),
      });
    }
  }, [selectedDay, agendamento.horario])

  const onChangeAgendamento = e =>
    setAgendamento({ ...agendamento, [e.target.name]: e.target.value });

  // const schema = Yup.object().shape({
  //   antendimento: Yup.string().required('selecione o tipo do atendimento'),
  //   setor: Yup.string().required('selecione o setor'),
  //   campus: Yup.string().required('selecione campus'),
  // });

  const Submit = async (e) => {
    e.preventDefault();

    if (agendamento.atendimento === "") {
      alert('Selecione o tipo de atendimento')
      return;
    }
    if (agendamento.setor === "") {
      alert('Selecione o setor')
      return;
    }
    if (agendamento.campus === "") {
      alert('Selecione o campus')
      return;
    }
    if (agendamento.campus === "") {
      alert('Selecione o horário')
      return;
    }
    if (agendamento.dataAgendamento === "") {
      alert('Selecione uma data')
      return;
    }

    await api.post('/agendamentos', {
      estudanteId: '97e67e57-e3fd-41c1-a918-df7acdce9ce3',
      campus: agendamento.campus,
      setor: agendamento.setor,
      categoria: agendamento.atendimento,
      dataAgendamento: agendamento.dataAgendamento
    })
      .then(response => {
        console.log(response); setIsOpen(true);
      })
      .catch(console.log('erro'))
  }

  const protocolNumber = uuidv4();

  return (
    <>
      <Container>

        <Agenda>
          <h1>Faça seu agendamento</h1><br></br><br></br>

          <form onSubmit={Submit}>

            <label>
              Nome:
              <input type="text" name="input" value="Digite aqui" />
            </label >
            <br /><br />


            <label>
              Curso:
              <select name="curso" >
                <option value="" disabled hidden>Selecione</option>
                <option value="Proae">Administração</option>
                <option value="SRCA">Antropologia</option>
                <option value="SRCA">Arqueologia e Preservação Patrimonial</option>
                <option value="SRCA">Artes Visuais</option>
                <option value="SRCA">Ciência da Computação</option>
                <option value="SRCA">Ciências Biológicas</option>
                <option value="SRCA">Ciências da Natureza</option>
                <option value="SRCA">Ciências Sociais (Bacharelado)</option>
                <option value="SRCA">Ciências Sociais (Licenciatura)</option>
                <option value="SRCA">Ecologia</option>
                <option value="SRCA">Educação Física</option>
                <option value="SRCA">Enfermagem</option>
                <option value="SRCA">Engenharia Agrícola e Ambiental</option>
                <option value="SRCA">Engenharia Agronômica</option>
                <option value="SRCA">Engenharia Civil</option>
                <option value="SRCA">Engenharia da Computação</option>
                <option value="SRCA">Engenharia de Produção</option>
                <option value="SRCA">Engenharia de Produção</option>
                <option value="SRCA">Engenharia Elétrica</option>
                <option value="SRCA">Engenharia Mecânica</option>
                <option value="SRCA">Farmácia</option>
                <option value="SRCA">Geografia</option>
                <option value="SRCA">Medicina</option>
                <option value="SRCA">Medicina Veterinária</option>
                <option value="SRCA">Psicologia</option>
                <option value="SRCA">Química</option>
                <option value="SRCA">Zootecnia</option>

              </select>
              <br /><br />
            </label>



            <label>
              Campus:
              <select name="campus" value={agendamento.campus} onChange={onChangeAgendamento}>
                <option value="" disabled hidden>Selecione</option>
                <option value="Petrolina">Petrolina </option>
                <option value="Petrolina Ciências Agrárias">Petrolina Ciências Agrárias</option>
                <option value="Juazeiro">Juazeiro</option>
                <option value="Serra da Capivara">Serra da Capivara</option>
                <option value="Senhor do Bonfim">Senhor do Bonfim</option>
                <option value="Paulo Afonso">Paulo Afonso</option>
                <option value="Salgueiro">Salgueiro</option>


              </select>
            </label>
            <br /><br />
            <label>

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
                Atendimento:
                <select name="atendimento" value={agendamento.atendimento} onChange={onChangeAgendamento}>
                  <option value="" disabled hidden>Selecione</option>
                  <option value="Matrícula">Matrícula</option>
                  <option value="Entrega de diploma">Entrega de diploma</option>

                </select>
                <br /><br />
              </label>





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
              disabled: { dayOfWeek: [0, 6] }
            }}
            selected={selectedDay}
            onSelect={setSelectedDay}
          />
        </Calendario>

      </Container>

      <ContentBotao>

        <BtnAgendar type="submit" onClick={(Submit)}>Agendar</BtnAgendar>
        <BtnCancelar type="submit" onClick={() => navigate('/')}>Cancelar</BtnCancelar>

        {/* <button type="submit" onClick={(openModal)}>Modal</button> */}


      </ContentBotao>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={
          {

            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              width: '35%',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              alignItems: 'center',
              background: 'rgba(214, 240, 255, 0.466)',
            }
          }
        }
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        <Container2>
          <h2>Agendamento realizado com sucesso !</h2>
          <h4>Número do protocolo:{`${protocolNumber}`} </h4>
          <BtnConfirmar onClick={closeModal}>Confirmar</BtnConfirmar>
        </Container2>
      </Modal>


    </>
  )
}