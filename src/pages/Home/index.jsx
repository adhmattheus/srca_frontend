import { Container, Btn } from './styles'
import { useNavigate } from "react-router-dom";

export function HomePage() {

    const navigate = useNavigate();
    return (
        <Container>

            <Btn type="submit" onClick={() => navigate('agendar')} >Novo agendamento</Btn>
            <Btn type="submit" onClick={() => navigate('listaagendamentos')}>Lista de Agendamentos</Btn>

        </Container>
    )
}