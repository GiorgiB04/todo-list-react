import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background: ${({ theme }) => theme.color.gallery};
    }

    .container {
        max-width: 950px;
        margin: 0 auto;
        padding: 22px;
    }
`;
