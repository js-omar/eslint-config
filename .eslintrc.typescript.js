module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    './.eslintrc.javascript.js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.{component,modal,page}.ts'],
      extends: ['./.eslintrc.angular.js'],
    },
    {
      files: ['*.spec.ts'],
      env: { jest: true },
      rules: { '@typescript-eslint/no-unsafe-call': 'off' },
    },
    {
      files: ['e2e.ts'],
      rules: { 'unicorn/prevent-abbreviations': 'off' },
    },
  ],
};
