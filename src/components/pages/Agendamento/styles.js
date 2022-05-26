import styled from 'styled-components';

export const Container = styled.main`
border: 1px solid black;
max-width: 1120px;
margin: 60px auto;
display: flex;
`;



export const Agenda = styled.div`
  flex:1;
   
`;

export const Calendario = styled.div`
  width: 330px;
  
`;

export const ContentBotao = styled.div`

border: 1px solid black;
width: 250px;

margin: auto;
display: flex;
justify-content: center;
align-items: space-between;

> button{
  margin-right: 20px; 
}
`;


