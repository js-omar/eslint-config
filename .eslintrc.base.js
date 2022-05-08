module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'off',
    'comma-dangle': 'off',
    'space-in-parens': ['error'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
  },
};
