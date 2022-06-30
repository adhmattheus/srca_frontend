import styled from 'styled-components'

export const Container = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 


`;

export const Btn = styled.button`
  background-clip: padding-box;
  background-color: lightblue;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 20px;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover, &:focus {
    background-color: lightcoral;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

&:hover {
  transform: translateY(-1px);
}


`;