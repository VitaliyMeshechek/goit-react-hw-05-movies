import styled from 'styled-components';

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
list-style: none;
`;

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-weight: 700;
  color: rgb(0, 0, 0);
  font-size: 22px;
  line-height: 1.18;
  &:hover {
  color: rgb(255, 69, 0);
}
  `;

export const Paragraph = styled.p`
position: absolute;
top: 5px;
right: 15px;
padding: 5px;
border-radius: 5px;
font-size: 22px;

color: rgb(139, 0, 0);
background-color: rgb(0, 255, 255);
`;
