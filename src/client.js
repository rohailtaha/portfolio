import React from 'react';
import App from './pages/home/App';
import { hydrateRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
hydrateRoot(rootElement, <App />);
