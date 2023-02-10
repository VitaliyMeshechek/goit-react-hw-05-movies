import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
`;

export const Title = styled.h1`
font-weight: 700;
color: rgb(0, 0, 0);
font-size: 34px;
line-height: 1.18;
transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
color: rgb(255, 69, 0);
}`;

export const List = styled.ul`
list-style: none;
display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Item = styled.li`

`;

export const StyledLink = styled(NavLink)`

  font-weight: 700;
  color: rgb(0, 0, 0);
  font-size: 22px;
  line-height: 1.18;
  text-decoration: none;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
  color: rgb(255, 69, 0);
}
`;
