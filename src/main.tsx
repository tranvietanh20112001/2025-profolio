import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from './config/theme.ts';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <CssBaseline />
    <App />
    </ThemeProvider>
  </BrowserRouter>,
)
