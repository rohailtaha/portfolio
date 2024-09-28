import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/home/App';

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
