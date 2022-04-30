module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [],
  plugins: [],
  rules: {
    'no-undef': 'off',
    'comma-dangle': 'off',
    'space-in-parens': ['error'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
  },
};
