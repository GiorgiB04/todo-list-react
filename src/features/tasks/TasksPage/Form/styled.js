import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 22px;

  @media (max-width: ${({ theme }) => theme.breakpiont.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  border: none;
  font-size: 16px;
  background: ${({ theme }) => theme.color.teal};
  border-radius: 3px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(120%);
  }
`;
