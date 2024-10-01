import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PROJECTS } from '../../utils/constants';
import SingleWork from './SingleWork';

const pathSegments = new URL(window.location.href).pathname.split('/');
const projectName = pathSegments[2];

const rootElement = document.getElementById('root');
hydrateRoot(rootElement, <SingleWork project={PROJECTS[projectName]} />);
