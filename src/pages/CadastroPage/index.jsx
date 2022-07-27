import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

export function Cadastro() {
  const navigate = useNavigate();

  const [aluno, setAluno] = useState({
    nome: "",
    email: "",
    cpf: "",
    curso: "",
    senha: "",
  });

  const onChangeAluno = (e) =>
    setAluno({ ...aluno, [e.target.name]: e.target.value });

  const Submit = (e) => {
    e.preventDefault();
    console.log(aluno);
  };

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
          placeholder="insira sua senha"
          value={aluno.senha}
          onChange={onChangeAluno}
        ></input>

        <button type="submit">Cadastrar</button>

        <a href="/" onClick={() => navigate("/")}>
          <FiArrowLeft />
          Voltar para o login
        </a>
      </form>
    </Container>
  );
}
