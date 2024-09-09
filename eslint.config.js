import react from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: ['**/*.css'],
    plugins: {
      react: react,
      '@typescript-eslint': typescriptEslint
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      semi: [1, 'always'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 2,
      '@typescript-eslint/no-unused-vars': 2,
      'space-before-function-paren': 2,
      'react/display-name': 2,
      'react/jsx-key': 2,
      'react/jsx-no-comment-textnodes': 2,
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-no-target-blank': 2,
      'react/jsx-no-undef': 2,
      'react/jsx-uses-react': 2,
      'react/no-children-prop': 2,
      'react/no-danger-with-children': 2,
      'react/no-deprecated': 2,
      'react/no-direct-mutation-state': 2,
      'react/no-find-dom-node': 2,
      'react/no-is-mounted': 2,
      'react/no-render-return-value': 2,
      'react/no-string-refs': 2,
      'react/no-unescaped-entities': 2,
      'react/no-unknown-property': 2,
      'react/no-unsafe': 0,
      'react/react-in-jsx-scope': 2,
      'react/require-render-return': 2,

      indent: ['error', 2, {
        SwitchCase: 1,
      }],
    }
  }
];
