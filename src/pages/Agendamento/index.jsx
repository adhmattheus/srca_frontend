/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Agenda,
  Calendario,
  ContentBotao,
  Container2,
  BtnCancelar,
  BtnAgendar,
  BtnConfirmar,
} from "./styles";
import { DayPicker } from "react-day-picker";
import { useState, useEffect } from "react";
import "react-day-picker/dist/style.css";
import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import api from "../../lib/api";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

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

  const [selectedDay, setSelectedDay] = useState("");
  const [protocolNumber, setprotocolNumber] = useState("");

  const [agendamento, setAgendamento] = useState({
    atendimento: "",
    setor: "",
    campus: "",
    dataAgendamento: selectedDay,
    horario: "",
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setAgendamento({
      atendimento: "",
      setor: "",
      campus: "",
      dataAgendamento: "",
      horario: "",
    });

    setSelectedDay(new Date());
    setIsOpen(false);
  }

  useEffect(() => {
    if (selectedDay) {
      const data = format(selectedDay, "yyyy-MM-dd");
      const hora = agendamento.horario;
      const agendamentoData = `${data}  ${hora}`;

      setAgendamento({
        ...agendamento,
        dataAgendamento: format(
          new Date(agendamentoData),
          "yyyy-MM-dd HH:mm:ss"
        ).toString(),
      });
    }
  }, [selectedDay, agendamento.horario]);

  const onChangeAgendamento = (e) =>
    setAgendamento({ ...agendamento, [e.target.name]: e.target.value });


  const Submit = async (e) => {
    e.preventDefault();

    if (agendamento.atendimento === "") {
      alert("Selecione o tipo de atendimento");
      return;
    }
    if (agendamento.setor === "") {
      alert("Selecione o setor");
      return;
    }
    if (agendamento.campus === "") {
      alert("Selecione o campus");
      return;
    }
    if (agendamento.campus === "") {
      alert("Selecione o horário");
      return;
    }
    if (agendamento.dataAgendamento === "") {
      alert("Selecione uma data");
      return;
    }

    await api
      .post("/agendamentos", {
        estudanteId: "97e67e57-e3fd-41c1-a918-df7acdce9ce3",
        campus: agendamento.campus,
        setor: agendamento.setor,
        categoria: agendamento.atendimento,
        dataAgendamento: agendamento.dataAgendamento,
      })
      .then((response) => {
        setprotocolNumber(response.data.agendamento.id);
        console.log(response);
        setIsOpen(true);
      })
      .catch(console.log("erro"));
  };

  return (
    <>
      <Container>
        <Agenda>
          <h1>Faça seu agendamento</h1>
          <br></br>
          <br></br>

          <form onSubmit={Submit}>
            <label>
              Campus:
              <select
                name="campus"
                value={agendamento.campus}
                onChange={onChangeAgendamento}
              >
                <option value="" disabled hidden>
                  Selecione
                </option>
                <option value="Petrolina">Petrolina </option>
                <option value="Petrolina Ciências Agrárias">
                  Petrolina Ciências Agrárias
                </option>
                <option value="Juazeiro">Juazeiro</option>
                <option value="Serra da Capivara">Serra da Capivara</option>
                <option value="Senhor do Bonfim">Senhor do Bonfim</option>
                <option value="Paulo Afonso">Paulo Afonso</option>
                <option value="Salgueiro">Salgueiro</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              <label>
                Setor:
                <select
                  name="setor"
                  value={agendamento.setor}
                  onChange={onChangeAgendamento}
                >
                  <option value="" disabled hidden>
                    Selecione
                  </option>
                  <option value="Proae">Proae</option>
                  <option value="SRCA">SRCA</option>
                </select>
                <br />
                <br />
              </label>
              <label>
                Atendimento:
                <select
                  name="atendimento"
                  value={agendamento.atendimento}
                  onChange={onChangeAgendamento}
                >
                  <option value="" disabled hidden>
                    Selecione
                  </option>
                  <option value="Matrícula">Matrícula</option>
                  <option value="Entrega de diploma">Entrega de diploma</option>
                </select>
                <br />
                <br />
              </label>
              Horário:
              <select
                name="horario"
                value={agendamento.horario}
                onChange={onChangeAgendamento}
              >
                <option value="" disabled hidden>
                  Selecione
                </option>
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
              disabled: { dayOfWeek: [0, 6] },
            }}
            selected={selectedDay}
            onSelect={setSelectedDay}
          />
        </Calendario>
      </Container>

      <ContentBotao>
        <BtnAgendar type="submit" onClick={Submit}>
          Agendar
        </BtnAgendar>
        <BtnCancelar type="submit" onClick={() => navigate("/")}>
          Cancelar
        </BtnCancelar>

        {/* <button type="submit" onClick={(openModal)}>Modal</button> */}
      </ContentBotao>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            width: "35%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            alignItems: "center",
            background: "rgba(214, 240, 255, 0.466)",
          },
        }
        }
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        <Container2>
          <h2>Agendamento realizado com sucesso!</h2>
          <h4>Número do protocolo:{`${protocolNumber}`} </h4>
          <BtnConfirmar onClick={closeModal}>Confirmar</BtnConfirmar>
        </Container2>
      </Modal>
    </>
  );
}
