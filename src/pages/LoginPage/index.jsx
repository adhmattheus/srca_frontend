import { Container } from "./styles";
import { FiLogIn, FiMail } from "react-icons/fi";

export function Login() {
  return (
    <Container>
      <form>
        <h2>Faça seu Login</h2>
        <input placeholder="insira seu email institucional"></input>
        <input type="password" placeholder="insira sua senha"></input>
        <button type="submit">Entrar</button>
        <a href="forget">Esqueci minha senha</a>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Container>
  );
}
