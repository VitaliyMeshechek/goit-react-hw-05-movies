import { useLocation, Outlet  } from 'react-router-dom';
import { Container, Title, List, StyledLink } from './AdditionalInformation.styled';

const AdditionalInformation = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <Container>
      <Title>Additional information</Title>
      <List>
        <li>
          <StyledLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: backLinkHref }} >
            Reviews
          </StyledLink>
        </li>
      </List>
      <Outlet />
    </Container>
  );
};

export default AdditionalInformation;
