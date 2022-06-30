import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Calendario = styled.aside`
  width: 330px;
  
  .Daypicker{
    background: lightblue;
    border-radius: 10px;
  }

  .DayPicker-Day--disabled{
    color: red;
  }
`;

export const ContainerFiltros = styled.main`
  border: 1px solid lightblue;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content:space-evenly ;
  border-radius: 15px;
  padding: 10px;
  margin: 10px; 
`;

export const Tabela2 = styled.div`
 table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;


thead tr{
  background-color: lightblue;
  text-align: center;
  font-weight: bold;
}

th,td {
  padding: 10px;
  text-align: center;
}

tbody tr:nth-child(even) {
  background-color: #dddddd;
}
 }
`