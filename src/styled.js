import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const ListWraper = styled.div``;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
  &:hover {
    padding-bottom: 5px;
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
`;

export const List = styled.ul`
  background: ${({ theme }) => theme.color.teal};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 20px;
`;
