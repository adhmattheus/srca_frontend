import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import Modal from "react-modal";
import * as Yup from "yup";



export function Cadastro() {

  const navigate = useNavigate();

  const [aluno, setAluno] = useState({
    nome: "",
    email: "",
    cpf: "",
    curso: "",
    senha: "",
  });

  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  const onChangeAluno = (e) =>
    setAluno({ ...aluno, [e.target.name]: e.target.value });


  const Submit = async (e) => {


    e.preventDefault();

    let schema = Yup.object().shape({
      nome: Yup.string().required("insira o seu nome"),
      email: Yup.string().required("insira o seu email").email("email institucional"),
      cpf: Yup.string().required("insira o seu cpf "),
      curso: Yup.string().required("insira seu curso"),
      senha: Yup.string().required("insira uma senha").min(6, "mínimo de 6 dígitos válidos"),
    });
    try {
      await schema.validate(aluno, { abortEarly: false })



    } catch (err) {
      const validationsErrors = {};

      err.inner.forEach(error => {
        validationsErrors[error.path] = error.message;
      });

      console.log(validationsErrors);
    }



  };

  // async function validate() {


  // }

  return (
    <Container>
      <form onSubmit={Submit}>
        <h2>Faça seu cadastro</h2>
        <input
          name="nome"
          placeholder="nome"
          value={aluno.nome}
          onChange={onChangeAluno}
        ></input>
        <input
          name="email"
          placeholder="email institucional"
          value={aluno.email}
          onChange={onChangeAluno}
        ></input>
        <input
          name="cpf"
          placeholder="cpf"
          value={aluno.cpf}
          onChange={onChangeAluno}
        ></input>
        <input
          name="curso"
          placeholder="curso"
          autoComplete="current-curso"
          value={aluno.curso}
          onChange={onChangeAluno}
        ></input>

        <input
          type="password"
          id="pass"
          name="password"
          autoComplete="current-password"
          placeholder="insira sua senha"
        ></input>
        <button type="submit" onClick={Submit}>
          Cadastrar
        </button>

        <a href="/" onClick={() => navigate("/")}>
          <FiArrowLeft />
          Voltar para o login
        </a>
      </form>

      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.37)",
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }
        } >
        <h2>Seu cadastro foi realizado com sucesso !</h2>
        <button onClick={closeModal}>Confirmar</button>
      </Modal>
    </Container>
  );
}
