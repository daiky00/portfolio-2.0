import styled from 'styled-components';

const Button = styled.a`
    font-family: inherit;
    font-size: 100%;
    padding: .5em 1em;
    color: ${(props) => props.color};
    border: 1px solid #999;
    border: transparent;
    background-color: ${(props) => props.backgroundColor};
    text-decoration: none;
    border-radius: 2px;
`

export default Button;