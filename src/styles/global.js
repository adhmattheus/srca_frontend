import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    /* background-color: #E4F2FF; */
    outline: 0;
}

button{
    cursor: pointer;
}

body, input, button{
    font-family: 'Gantari', sans-serif;
}
`;