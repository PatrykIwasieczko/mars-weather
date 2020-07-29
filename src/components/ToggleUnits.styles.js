import styled from "styled-components";

export const Units = styled.div`
    place-self: end;
    color: var(--color-light);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    opacity: 0.7;
    transition: opacity 275ms linear;

    :hover {
        opacity: 1;
    }
`;

export const ToggleUnitsButton = styled.button`
    cursor: pointer;
    width: 4em;
    border: 2px solid var(--color-light);
    background: transparent;
    padding: 0;
    border-radius: 100vmax;
    margin: 0 1em;

    ::after {
        content: "";
        display: block;
        background: var(--color-light);
        border-radius: 50%;
        height: 1rem;
        margin: 3px;
        margin-left: ${(props) => (props.isMetric ? "3px" : "auto")};
        width: 1rem;
    }
`;
