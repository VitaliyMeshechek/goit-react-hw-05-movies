import styled from 'styled-components';

export const Wrraper = styled.div`
  position: relative;
  border-radius: 5px;
`;

export const Container = styled.div`
height: auto;
width: 100%;
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

  @media screen and (min-width: 768px) and (max-width: 1169px) {
  flex-basis: calc(100% / 3 - 20px);
}

  @media screen and (min-width: 1170px) {
  flex-basis: calc(100% / 4 - 20px);
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
