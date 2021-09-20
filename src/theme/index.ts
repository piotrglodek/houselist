import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primary: '#47b5ff',
    white: '#ffffff',
    black: '#272727',
    gray: '#a4a4a4',
  },
};

export const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
      box-sizing:border-box;
    }

    body{
      margin:0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`;
