import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './theme';

interface Props {}

const Providers: FC<Props> = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default Providers;
