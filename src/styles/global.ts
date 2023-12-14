import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-100']};
  }

  body {
    background: ${(props) => props.theme['base-100']};
    color: ${(props) => props.theme['base-900']};
    font-family: 'Roboto', monospace, sans-serif;
    font-size: 100%;
    font-weight: 400;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea, select {
    font: inherit;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  li {
    list-style: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`
