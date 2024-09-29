import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'error',
      'no-unreachable': 'error',
      'no-self-assign': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'prefer-const': 'error',
      'require-await': 'error',
      'yoda': 'error',
      'react/function-component-definition': [
        'error',
        {
          'namedComponents': 'function-declaration',
        },
      ],
    },
  },
];
