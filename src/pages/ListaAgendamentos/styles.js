import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tabela = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;


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