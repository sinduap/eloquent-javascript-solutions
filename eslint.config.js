import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error',
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
];
