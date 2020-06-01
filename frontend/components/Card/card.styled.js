import styled from "styled-components";

export const StyledCard = styled.div`
  border: 2px solid white;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  margin: 0 0 2rem 0;
  padding: 1rem;
  background: ${({ theme }) => theme.primaryMedium};
`;
