import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Work from './Work';

const rootElement = document.getElementById('root');
hydrateRoot(rootElement, <Work />);
