import styled from 'styled-components';

export const List = styled.ul`
list-style: none;
`;

export const Item = styled.li`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 margin-left: auto;
 margin-right: auto;
`;

export const Title = styled.h2`
font-weight: 700;
color: rgb(0, 0, 0);
font-size: 22px;
line-height: 1.18;
`;

export const Text = styled.p`
 font-weight: 500;
  color: rgb(0, 0, 0);
  font-size: 18px;
  line-height: 1.14;
`;
