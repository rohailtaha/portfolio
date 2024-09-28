import React from 'react';
import App from './App';
import { hydrateRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
hydrateRoot(rootElement, <App />);

// Hot Module Replacement for React
// if (module.hot) {
//   console.log(
//     '***************************** isHot: *****************************',
//     module.hot
//   );
//   module.hot.accept('./App', () => {
//     console.log(
//       '******************* accepting updated App ******************************'
//     );
//     // const NextApp = require('./App').default;
//     // hydrateRoot(rootElement, <NextApp />);
//   });
// }
