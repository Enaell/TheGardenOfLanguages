import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './locale/i18n';
import { App } from './app/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './app/theme/theme';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      < App />
    </ThemeProvider>
  </React.StrictMode>,
);
