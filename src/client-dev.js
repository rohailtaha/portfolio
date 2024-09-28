import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);

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
