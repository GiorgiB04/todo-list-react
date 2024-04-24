import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
  margin: 22px 0;
  box-shadow: ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
  border-bottom: 1px ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid #ddd;

  @media (max-width: ${({ theme }) => theme.breakpiont.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  padding: 12px 0;
  margin: 5px;
`;

export const Body = styled.div`
  padding: 22px;
`;
