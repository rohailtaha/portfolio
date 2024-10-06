import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Home from './Home';

const rootElement = document.getElementById('root');
hydrateRoot(rootElement, <Home />);
