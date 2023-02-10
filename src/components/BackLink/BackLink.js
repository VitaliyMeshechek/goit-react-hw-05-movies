import { FaArrowCircleLeft } from "react-icons/fa";
import { StyledLink } from "./BackLink.styled";

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <FaArrowCircleLeft size="24" />
      {children}
    </StyledLink>
  );
};
