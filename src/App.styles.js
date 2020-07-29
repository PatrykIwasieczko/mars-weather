import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-size-h1: 1.5rem;
    --font-size-h2: 2.25rem;
    --font-size-body: 1rem;
    --font-size-xl: 4.5rem;
    --color-light: #fff;
    --color-gray: #989898;
    --color-dark: #444;
    --color-accent: #D06D6D;
    --color-accent-dark: #613131;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-semi: 500;
    --font-weight-bold: 700;
  }


  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    height: 100vh;

    color: var(--color-light);
  }

  h1, h2, h3 {
    line-height: 1;
  }

  a {
    color: var(--color-accent);
  }

  a:hover {
    color: var(--color-accent-dark);
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const AppWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const MarsWeather = styled.main`
    background: rgba(0, 0, 0, 0.7);
    padding: 2em;
    max-width: 1000px;
    margin: 40px 0;
    border-radius: 20px;

    .main-title {
        font-size: var(--font-size-h1);
        font-weight: var(--font-weight-light);
        text-transform: uppercase;
        color: var(--color-accent);
        letter-spacing: 2px;
        grid-column: 1 / -1;
    }

    .section-title {
        font-size: var(--font-size-h2);
        font-weight: var(--font-weight-bold);
        margin: 0;
    }

    .reading {
        font-size: var(--font-size-h1);
        margin: 0;
        color: var(--color-gray);
    }
`;

export const InformationsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
