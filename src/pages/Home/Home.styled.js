import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: rgb(0, 0, 0);
  font-size: 34px;
  margin-bottom: 50px;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
list-style: none;
margin-left: -20px;
  margin-top: -20px;
`;

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;




