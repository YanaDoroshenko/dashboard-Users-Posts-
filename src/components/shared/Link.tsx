import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  margin: 0 40px;
  font-size: 30px;
  text-decoration: none;
  transition: 0.3s all;
  color: white;

  &:hover {
    color: #1a1a1a;
  }
`;