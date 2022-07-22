import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { FiLogIn, FiMail } from "react-icons/fi";

export function Cadastro() {
  const navigate = useNavigate();
  return (
    <Container>
      <form>
        <h2>Faça seu cadastro</h2>
        <input placeholder="nome"></input>
        <input placeholder="insira seu email institucional"></input>
        <input placeholder="cpf"></input>
        <input type="password" placeholder="insira sua senha"></input>
        <button type="submit">Cadastrar</button>
        {/* <a href="forget">Esqueci minha senha</a> */}

        <a href="/" onClick={() => navigate("/")}>
          <FiLogIn />
          Voltar para o login
        </a>
      </form>
    </Container>
  );
}
