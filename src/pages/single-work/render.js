import React from 'react';
import { createRoot } from 'react-dom/client';
import SingleWork from './SingleWork';
import { PROJECTS } from '../../utils/constants';

const pathSegments = new URL(window.location.href).pathname.split('/');
const projectName = pathSegments[2];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<SingleWork project={PROJECTS[projectName]} />);
