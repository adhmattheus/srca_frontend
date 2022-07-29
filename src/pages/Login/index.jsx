import { Container } from "./styles";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <form>
        <h2>Faça seu Login</h2>
        <input placeholder="insira seu email institucional"></input>
        <input type="password" placeholder="insira sua senha"></input>
        <button type="submit">Entrar</button>
        {/* <a href="forget">Esqueci minha senha</a> */}

        <a href="cadastrarusuarios" onClick={() => navigate("cadastrarusuarios")}>
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Container>
  );
}
