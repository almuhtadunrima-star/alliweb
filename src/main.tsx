import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScroll } from './components/SmoothScroll';
import 'lenis/dist/lenis.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </ThemeProvider>
  </StrictMode>,
);
