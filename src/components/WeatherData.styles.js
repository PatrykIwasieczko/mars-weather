import styled from "styled-components";

export const WeatherWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2em;
    padding: 40px 0;
`;

export const Date = styled.div`
    h2 {
        font-size: var(--font-size-xl);
        margin: 0;
    }

    p {
        font-size: var(--font-size-h2);
        margin: 0;
        color: var(--color-gray);
        font-weight: var(--font-weight-light);
    }
`;

export const Temperature = styled.div`
    --border: solid 0.25em var(--color-accent-dark);
    border-left: var(--border);
    border-right: var(--border);
    padding: 0 2em;
`;

export const Pressure = styled.div`
    --border: solid 0.25em var(--color-accent-dark);
    border-right: var(--border);
`;

export const Wind = styled.div`
    display: grid;

    .section-title,
    .reading {
        grid-column: 2 / 3;
    }

    .wind-direction {
        --size: 6rem;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        display: -ms-grid;
        display: grid;
        place-items: center;
        grid-row: 1 / span 2;
    }

    .wind-arrow {
        --direction: ${(props) => props.deg + "deg"};
        --size: 0.8rem;
        height: calc(var(--size) * 3);
        width: var(--size);
        background: var(--color-accent-dark);
        clip-path: polygon(50% 0, 0% 100%, 100% 100%);
        transform: translateY(-50%) rotate(var(--direction));
        transform-origin: bottom center;
        transition: -webkit-transform 500ms ease;
        transition: transform 500ms ease;
        transition: transform 500ms ease, -webkit-transform 500ms ease;
    }
`;
