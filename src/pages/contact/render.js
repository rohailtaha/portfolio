import React from 'react';
import { createRoot } from 'react-dom/client';
import Contact from './Contact';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Contact />);
