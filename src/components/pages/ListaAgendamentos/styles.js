import styled from 'styled-components';

export const Tabela = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`;