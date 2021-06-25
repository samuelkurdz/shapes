module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-react-hooks',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    // 'eslint-plugin-prettier',
  ],
  rules: {
    'no-console': 2,
    'no-var': 1,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [
      'off',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
