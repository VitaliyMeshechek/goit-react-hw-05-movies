import styled from 'styled-components';
import { FaArrowCircleLeft } from "react-icons/fa";

export const ContainerWrraper = styled.div`
display: flex;
  margin-bottom: 20px;

@media screen and (min-width: 768px) {
  margin-bottom: 0;
  margin-right: 20px;
}`;

export const Img = styled.img`
  height: auto;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }`;

export const TitleMain = styled.h1`
padding-left: 10px;
font-weight: 700;
color: rgb(0, 0, 0);
font-size: 34px;
line-height: 1.18;
&:hover {
color: rgb(255, 69, 0);
}`;

  export const Title = styled.h2`
  padding-left: 10px;
  font-weight: 700;
  color: rgb(0, 0, 0);
  font-size: 22px;
  line-height: 1.18;
  &:hover {
  color: rgb(255, 69, 0);
}`;

export const Paragraph = styled.p`
  padding-left: 10px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  font-size: 18px;
  line-height: 1.14;
  &:hover {
  color: rgb(255, 69, 0);
}
`;

export const Text = styled.p`
  padding-left: 10px;
  font-weight: 500;
  color: rgb(50, 205, 50);
  font-size: 18px;
  line-height: 1.14;
  margin-left: 0;
`;

export const Span = styled.span`
  padding-left: 10px;
  font-weight: 500;
  color: rgb(50, 205, 50);
  font-size: 18px;
  line-height: 1.14;

`;

export const IconArrowLeft = styled(FaArrowCircleLeft)
`margin-right: 8px;
&:hover,
 focus {
  fill: rgb(255, 69, 0);
}`;

export const IconSpan = styled.span
`display: flex;
justify-content: start;
align-items: center;
margin-bottom: 10px;
font-weight: 500;
font-size: 18px;
line-height: 1.14;
&:hover,
 focus {
  color: rgb(255, 69, 0);
}`;


export const ListGenres = styled.ul`
display: flex;
justify-content: start;
flex-direction: column;
padding-left: 10px;

list-style: none;
`;

export const ItemGenres = styled.li`
margin-left: 0;
font-weight: 500;
  color: rgb(50, 205, 50);
  font-size: 18px;
  line-height: 1.14;
  margin-left: 0;
&:not(:last-child) {
    margin-bottom: 10px;
  }

  &::before {
    content: '▶';

    margin-right: 10px;
    }
`;
