import { FcSearch } from "react-icons/fc";

import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  box-shadow: 0px 15px 10px -15px #111;
`;
export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 50px;
  border: none;
  border-radius: 10px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
  &:focus {
      color: #212529;
      border-color: #191970;
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
`;
export const Input = styled.input`
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  display: block;
      width: 100%;
      padding: 10px 20px;
      font-family: inherit;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.5;
      background-color: #fff;
      border: 1px solid #bdbdbd;
      border-radius: 10px;
      border: none;
      border-bottom: 2px solid rgb(236, 236, 236);
      border-right: 2px solid rgb(236, 236, 236);

      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::placeholder {
  font: inherit;
  font-size: 20px;
}

&:focus {
      color: #212529;
      background-color: #fff;
      border-color: #191970;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
`;




export const SearchIcon = styled(FcSearch)`

`;
