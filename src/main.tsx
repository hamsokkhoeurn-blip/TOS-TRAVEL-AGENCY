import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

registerSW({ immediate: true });

window.history.scrollRestoration = 'manual';
if (window.location.hash) {
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}
window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
window.addEventListener('pageshow', () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), { once: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
