module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    createDefaultProgram: true,
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
