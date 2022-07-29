import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  place-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 25px;
    }

    input {
      background-color: white;
      border: 1px solid lightblue;
      border-radius: 10px;
      padding: 13px;
      width: 100%;
      color: black;
      margin-bottom: 5px;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background-clip: padding-box;
      background-color: lightblue;
      border: 1px solid transparent;
      border-radius: 0.25rem;
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
      padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
      position: relative;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      width: auto;

      &:hover,
      &:focus {
        background-color: lightcoral;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      }

      &:hover {
        transform: translateY(-1px);
      }
    }

    a {
      font-size: 12px;
      color: black;
      text-decoration: none;
      display: block;
      margin-bottom: 20px;
    }

    > a {
      color: black;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: color 0.2s;

      &:hover {
        color: #0cb1d6;
      }
    }
  }
`;
