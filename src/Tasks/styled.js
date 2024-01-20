import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 11px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done} ) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.forestGreen};
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(110%);
    }

    ${({ remove} ) => remove && css`
        background-color: red;
        color: white;
        border: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        transition: 0.3s;

        &:hover {
            background-color: rgba(246, 7, 7, 0.516);
        }
    `}
`;