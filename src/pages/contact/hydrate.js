import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Contact from './Contact';

const rootElement = document.getElementById('root');
hydrateRoot(rootElement, <Contact />);
