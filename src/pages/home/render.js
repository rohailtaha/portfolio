import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Home />);
