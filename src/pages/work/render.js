import React from 'react';
import { createRoot } from 'react-dom/client';
import Work from './Work';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Work />);
